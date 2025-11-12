window.addEventListener("load", function () {
  const loader = document.getElementById("tacho-loader-wrapper");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const downloadModal = document.getElementById('downloadModal');
  if (downloadModal) {
    const modalDownloadButton = document.getElementById('modal-download-watermark');
    const showContactButton = document.getElementById('modal-show-contact');
    const backButton = document.getElementById('modal-back-button');
    const contactFormBtn = document.getElementById('modal-contact-form-btn');
    const choiceView = document.getElementById('modal-choice-view');
    const contactView = document.getElementById('modal-contact-view');
    
    downloadModal.addEventListener('show.bs.modal', function (event) {
      const triggerButton = event.relatedTarget;
      if (triggerButton) {
        const driveLink = triggerButton.getAttribute('data-drive-link');
        if (driveLink && modalDownloadButton) {
          modalDownloadButton.href = driveLink;
        }
      }
      if (choiceView) choiceView.style.display = 'block';
      if (contactView) contactView.style.display = 'none';
    });
    
    if (modalDownloadButton) {
      modalDownloadButton.addEventListener('click', (e) => {
        e.preventDefault();
        const href = modalDownloadButton.href;
        if (href && href !== '#') {
          window.open(href, '_blank');
        }
        const modalInstance = bootstrap.Modal.getInstance(downloadModal);
        if (modalInstance) {
          modalInstance.hide();
        }
      });
    }
    
    if (showContactButton) {
      showContactButton.addEventListener('click', () => {
        if (choiceView) choiceView.style.display = 'none';
        if (contactView) contactView.style.display = 'block';
      });
    }
    if (backButton) {
      backButton.addEventListener('click', () => {
        if (choiceView) choiceView.style.display = 'block';
        if (contactView) contactView.style.display = 'none';
      });
    }
    if (contactFormBtn) {
      contactFormBtn.addEventListener('click', () => {
        const modalInstance = bootstrap.Modal.getInstance(downloadModal);
        if (modalInstance) {
          modalInstance.hide();
        }
        setTimeout(() => {
          const contactForm = document.getElementById('contact-form');
          if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          }
        }, 300);
      });
    }
  }
});
