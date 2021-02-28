import { Component, Input, OnInit } from '@angular/core';
// activatedroute: service to keep track of currently activated route associated with this video component
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

    videoId: number = 0;

    videoTitles: string[] = [
        "Ramps: A Super, Simple Machine!​",
        "Ramps: Super Simple Machines: Levers",
        "Ramps: Need a Lift? Try a Pulley!",
        "Let's Get Rolling!",
        "The Power of Sunlight!",
        "Fun with Magnets!",
        "Make Your Own Sundial!",
        "The Coolest Machine Ever!",
    ];
    videoLinks: string[] = [
        "https://www.youtube.com/embed/3COvm0TtxWg",
        "https://www.youtube.com/embed/lueqE0lxLyc",
        "https://www.youtube.com/embed/Nj4J7QNeBNk",
        "https://www.youtube.com/embed/YIV9IUHqW3A",
        "https://www.youtube.com/embed/0Qmgdz9E47s",
        "https://www.youtube.com/embed/s236Q1nuWXg",
        "https://www.youtube.com/embed/SeSexM-wVz",
        "https://www.youtube.com/embed/5mGn6mrlrfw"
    ];
    videoTitle: string = "";
    link: SafeResourceUrl = "";

    // inject service into component via dependency injection
    constructor(private _Activatedroute: ActivatedRoute, private sanitizer: DomSanitizer) {
        this.videoId = parseInt(this._Activatedroute.snapshot.paramMap.get("id")); // use snapshot because id is not likely to change (unlike observable)

        this.videoTitle = this.videoTitles[this.videoId];

        this.link = sanitizer.bypassSecurityTrustResourceUrl(this.videoLinks[this.videoId]);
    }

    ngOnInit(): void { }

}
