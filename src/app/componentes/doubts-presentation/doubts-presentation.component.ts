import { Component } from '@angular/core';

@Component({
  selector: 'app-doubts-presentation',
  standalone: true,
  imports: [],
  templateUrl: './doubts-presentation.component.html',
  styleUrl: './doubts-presentation.component.css',
})
export class DoubtsPresentationComponent {
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      function doubtClicked(event: any) {
        const eventId = event.target.dataset.id;
        let id = eventId.slice(-1);
        id = eventId + '-' + id;
        const doubtHidded = document.getElementById(id);
        doubtHidded!.classList.toggle('hidden');

        const div = document.getElementById(eventId) as HTMLElement;
        if (div as HTMLElement) {
          if ((div!.children[1] as HTMLElement).dataset['isOpen'] === 'false') {
            (
              div!.children[1] as HTMLElement
            ).innerHTML = `<i data-id=${eventId} class="fa-solid fa-chevron-down"></i>`;
            (div!.children[1] as HTMLElement).dataset['isOpen'] = 'true';
          } else {
            div!.children[1].innerHTML = `<i data-id=${eventId} class="fa-solid fa-chevron-up"></i>`;
            (div!.children[1] as HTMLElement).dataset['isOpen'] = 'false';
          }
        }
      }

      function doubt() {
        const items = document.getElementsByClassName('doubt-item');
        for (let i = 0; i < items.length; i++) {
          items[i].addEventListener('click', doubtClicked);
        }
      }

      doubt();
    });
  }
}
