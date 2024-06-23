import { Component, Optional } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "ngx-remove-dialog",
  templateUrl: "./remove-dialog.component.html",
  styleUrls: ["./remove-dialog.component.scss"],
})
export class RemoveDialogComponent {
  loadingLargeGroup = false;

  constructor(@Optional() private ref: NbDialogRef<RemoveDialogComponent>) {}

  cancel() {
    this.ref.close();
  }

  toggleLoadingLargeGroupAnimation() {
    this.loadingLargeGroup = true;

    setTimeout(() => {
      this.ref.close(true);
      this.loadingLargeGroup = false;
    }, 3000);
  }
}
