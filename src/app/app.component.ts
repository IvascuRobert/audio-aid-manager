/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from "@angular/core";
import { NbIconLibraries } from "@nebular/theme";
import { AnalyticsService } from "./@core/utils/analytics.service";
import { SeoService } from "./@core/utils/seo.service";

@Component({
  selector: "ngx-app",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent implements OnInit {
  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    private iconLibraries: NbIconLibraries
  ) {
    this.iconLibraries.registerFontPack("font-awesome", {
      packClass: "fab",
      iconClassPrefix: "fa",
    });
    this.iconLibraries.registerFontPack("fa", {
      packClass: "fa",
      iconClassPrefix: "fa",
    });
    this.iconLibraries.registerFontPack("far", {
      packClass: "far",
      iconClassPrefix: "fa",
    });
    this.iconLibraries.registerFontPack("ion", { iconClassPrefix: "ion" });
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
