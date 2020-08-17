import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-youtube',
    template: `<div class="embed-responsive embed-responsive-16by9 rounded">
        <iframe class="embed-responsive-item" [src]="this.video"></iframe>
    </div>`
})
export class YoutubeComponent implements OnInit {

    @Input() url: string = '';
    video: any;

    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit(): void {
        setTimeout(() => {
            console.log(this.url);
            this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
        }, 300);
    }
}
