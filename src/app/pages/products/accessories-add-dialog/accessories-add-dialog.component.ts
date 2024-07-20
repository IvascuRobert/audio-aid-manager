import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Gender } from '../../../@core/data/customer';

@Component({
    selector: 'ngx-accessories-add-dialog',
    templateUrl: './accessories-add-dialog.component.html',
    styleUrls: ['./accessories-add-dialog.component.scss'],
})
export class AccessoriesAddDialogComponent {
    accessoriesAddForm = this.fb.group({
        id: [null],
        group: ["", [Validators.required]],
        serialNumber: ["", [Validators.required]],
        name: ["", [Validators.required]],
        brand: ["", [Validators.required]],
        type: ["", [Validators.required]],
        price: ["", [Validators.required]],
        location: ["", [Validators.required]],
        customer: ["", [Validators.required]],
    });

    loadingLargeGroup = false;

    constructor(
        @Optional() private ref: NbDialogRef<AccessoriesAddDialogComponent>,
        private fb: FormBuilder
    ) { }

    cancel() {
        this.ref.close();
    }

    submit() {
        console.log("here");
        this.accessoriesAddForm.markAsDirty();
        // this.ref.close(value);
    }

    toggleLoadingLargeGroupAnimation() {
        this.loadingLargeGroup = true;

        setTimeout(() => {
            this.loadingLargeGroup = false;
            this.ref.close();
        }, 3000);
    }


    isValid(controlName: string): boolean {
        return (
            this.accessoriesAddForm.controls[controlName].invalid &&
            (this.accessoriesAddForm.controls[controlName].dirty ||
                this.accessoriesAddForm.controls[controlName].touched)
        );
    }
}
