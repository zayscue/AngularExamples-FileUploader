import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[dragAndDrop]' })
export class DragAndDropDirective {
    constructor(private el: ElementRef) {}

    @HostListener('dragover') onDragOver() {
        this.addClass('is-dragover');
    }

    @HostListener('dragenter') onDragEnter() {
        this.addClass('is-dragover');
    }

    @HostListener('dragleave') onDragLeave() {
        this.removeClass('is-dragover');
    }

    @HostListener('dragend') onDragEnd() {
        this.removeClass('is-dragover');
    }

    @HostListener('drop') onDrop() {
        this.removeClass('is-dragover');
    }

    private containsClass(className: string) {
        return this.el.nativeElement.classList.contains(className);
    }

    private addClass(className: string) {
        this.el.nativeElement.classList.add(className);
    }

    private removeClass(className: string) {
        this.el.nativeElement.classList.remove(className);
    }
}