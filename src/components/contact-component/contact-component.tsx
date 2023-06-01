import { Component, h } from '@stencil/core';

@Component({
  tag: 'contact-component',
  styleUrl: 'contact-component.css',
  shadow: false,
})
export class ContactComponent {
  render() {
    return (
      <div class="row" id="scrollspyHeading2">
        <div class="col-12 text-center mt-5">
          <h1>Formulaire de contact</h1>
        </div>
        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
        </p>
        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id="name" name="name" class="form-control" />
                    <label htmlFor="name" class="">
                      Your name
                    </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id="email" name="email" class="form-control" />
                    <label htmlFor="email" class="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input type="text" id="subject" name="subject" class="form-control" />
                    <label htmlFor="subject" class="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea typeof="text" id="message" name="message" rows={2} class="form-control md-textarea"></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div class="text-center text-md-left">
              <a class="btn btn-primary">
                {/*onClick="document.getElementById('contact-form').submit();"*/}
                Send
              </a>
            </div>
            <div class="status"></div>
          </div>
          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="bi bi-geo-alt-fill"></i>
                <p>1400 Yverdon les bains, Suisse</p>
              </li>

              <li>
                <i class="bi bi-telephone-fill"></i>
                <p>+ 41 77 206 00 10</p>
              </li>

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
