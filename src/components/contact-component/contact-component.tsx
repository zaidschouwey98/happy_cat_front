import { Component, h } from '@stencil/core';

@Component({
  tag: 'contact-component',
  styleUrl: 'contact-component.css',
  shadow: false,
})
export class ContactComponent {
  render() {
    return (
      <div class="row contact" id="contact">
        <div class="col-12 text-center mt-5">
          <h1>Contact</h1>
        </div>
        <p class="text-center w-responsive mx-auto mb-5">
          Vous pouvez me contacter par WhatsApp de pr&eacute;f&eacute;rence (pour les photos et vid&eacute;os &ccedil;a va mieux) ainsi que pour tous renseignements.
        </p>
        <div class="row">
          <div class="col-md-4 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="bi bi-geo-alt-fill"></i>
                <p>1400 Yverdon les bains, Suisse</p>
              </li>
            </ul>
          </div>
          <div class="col-md-4 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="bi bi-telephone-fill"></i>
                <p>+ 41 77 206 00 10</p>
              </li>
            </ul>
          </div>
          <div class="col-md-4 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="bi bi-envelope-fill"></i> <p>mounama@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
