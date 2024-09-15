import { Component, OnInit } from "@angular/core";
import { NbDialogRef, NbDialogService } from "@nebular/theme";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { tap } from "rxjs/operators";
import { Action } from "../../../@core/data/actions";
import { Doctor } from "../../../@core/data/doctor";
import { Entity } from "../../../@core/data/entity";
import { CoreService } from "../../../@core/services/core.service";
import { ActionsCellComponent } from "../../shared/components/custom-table-cell-render/actions-cell.component";
import { BaseTable } from "../../shared/directives/base-table.directive";
import { DoctorsAddDialogComponent } from "../doctors-add-dialog/doctors-add-dialog.component";

@UntilDestroy()
@Component({
  selector: "ngx-doctors",
  templateUrl: "./doctors.component.html",
  styleUrls: ["./doctors.component.scss"],
})
export class DoctorsComponent extends BaseTable<Doctor> implements OnInit {
  settings: Record<string, any> = {
    selectMode: "multi",
    actions: false,
    columns: {
      id: {
        title: "ID",
        type: "number",
        width: "10%",
      },
      name: {
        title: "Name",
        type: "string",
      },
      actions: {
        title: "Actions",
        type: "custom",
        width: "1%",
        renderComponent: ActionsCellComponent,
        valuePrepareFunction: (value, row, cell) => row,
        onComponentInitFunction: (instance) => {
          instance.actionChange
            .subscribe(({ action, row }) => {
              if (action === Action.Delete) {
                this.removeItem(row)
              }
            });
        },
        sort: false,
        filter: false,
      },
    },
  };

  doctors$ = this.coreService.doctors$.pipe(
    tap((doctors) => this.source.load(doctors))
  )

  entity = Entity.Doctor

  constructor(
    private coreService: CoreService,
    protected readonly dialogService: NbDialogService
  ) {
    super(dialogService);
  }

  ngOnInit(): void {
    this.getDoctors()
  }

  addDialog() {
    this.dialogRef().onClose.pipe(untilDestroyed(this)).subscribe((fetchData: boolean) => {
      if (fetchData)
        this.reloadDoctors()
    });
  }

  editDialog() {
    this.dialogRef(this.selectedRows[0]).onClose.pipe(untilDestroyed(this)).subscribe((fetchData: boolean) => {
      if (fetchData)
        this.reloadDoctors()
    });
  }

  getDoctors(): void {
    this.coreService.getDoctors().pipe(untilDestroyed(this)).subscribe();
  }

  private dialogRef(doctor: Doctor | null = null): NbDialogRef<DoctorsAddDialogComponent> {
    return this.dialogService.open(DoctorsAddDialogComponent, {
      context: {
        doctor
      }
    })
  }

  reloadDoctors(): void {
    this.resetSelectedRows();
    this.getDoctors();
  }
}
