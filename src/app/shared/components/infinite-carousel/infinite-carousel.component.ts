import { Component, input, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AiCardComponent } from '../ai-card/ai-card.component';
import { AiTool } from '../../../core/models/ai-tool.interface';
import { SwiperContainer } from 'swiper/element';

@Component({
    selector: 'app-infinite-carousel',
    standalone: true,
    imports: [CommonModule, AiCardComponent, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './infinite-carousel.component.html',
    styleUrls: ['./infinite-carousel.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfiniteCarouselComponent implements AfterViewInit {
    tools = input.required<AiTool[]>();
    title = input.required<string>();
    icon = input.required<string>();
    scrollSpeed = input<number>(60);

    @ViewChild('swiperRef') swiperRef!: ElementRef<SwiperContainer>;

    constructor() { }

    ngAfterViewInit() {
        if (this.swiperRef?.nativeElement) {
            const swiperEl = this.swiperRef.nativeElement;

            Object.assign(swiperEl, {
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                speed: 4000,
                loop: true,
                freeMode: true,
                slidesPerView: 'auto',
                spaceBetween: 32
            });

            swiperEl.initialize();
        }
    }
}
