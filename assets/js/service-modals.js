/**
 * Service Modal System
 * Handles detailed service information popups and service selection
 */

// Service Data with detailed information
const serviceData = {
  'general': {
    icon: '<i class="fa-solid fa-file-signature"></i>',
    title: 'General Notarization',
    price: '$15',
    priceDetail: 'per signature',
    description: 'Professional notarization services for acknowledgments, jurats, oaths, and affirmations. Perfect for personal and business documents that require official certification.',
    included: [
      'Acknowledgments',
      'Jurats',
      'Oaths & Affirmations',
      'Copy Certifications',
      'Signature Witnessing'
    ],
    needs: [
      'Valid government-issued photo ID',
      'Unsigned documents (sign in our presence)',
      'All signers must be present',
      'Understanding of document contents'
    ],
    uses: 'Ideal for affidavits, contracts, business agreements, permission letters, consent forms, and personal declarations.',
    time: '15-30 minutes per document'
  },

  'mobile': {
    icon: '<i class="fa-solid fa-house-user"></i>',
    title: 'Mobile Notary Service',
    price: '$50',
    priceDetail: '$15 per signature + $35 travel fee',
    description: 'We bring professional notary services directly to your location. Perfect for those unable to travel or needing notarization at their home, office, hospital, or care facility.',
    included: [
      'Travel to your location (within 20 miles)',
      'Home, office, or facility visits',
      'Hospital and assisted living visits',
      'All general notarization services',
      'Flexible scheduling'
    ],
    needs: [
      'Valid government-issued photo ID',
      'Unsigned documents',
      'Safe, private meeting location',
      'All signers present at appointment',
      'Address within 20-mile service area'
    ],
    uses: 'Perfect for elderly or disabled clients, home closings, hospital visits, business offices, or when you simply prefer the convenience of at-home service.',
    time: '30-45 minutes including travel'
  },

  'ron': {
    icon: '<i class="fa-solid fa-video"></i>',
    title: 'Remote Online Notarization (RON)',
    price: '$40',
    priceDetail: 'per session',
    description: 'Secure, legally valid video notarization from anywhere in Oregon. No need to leave your home—complete your notarization online through our encrypted platform.',
    included: [
      'Secure video conference',
      'Valid anywhere in Oregon',
      'Electronic document handling',
      'Digital signature capture',
      'Fast turnaround (often same-day)',
      'Legally equivalent to in-person'
    ],
    needs: [
      'Valid government-issued photo ID',
      'Computer or smartphone with camera',
      'Stable internet connection',
      'Documents in digital format (PDF)',
      'Email address for receiving documents'
    ],
    uses: 'Ideal for out-of-state clients, urgent documents, mobility-limited individuals, pandemic safety, and anyone seeking maximum convenience.',
    time: '20-30 minutes'
  },

  'real-estate': {
    icon: '<i class="fa-solid fa-building"></i>',
    title: 'Real Estate Documents',
    price: '$15',
    priceDetail: 'per signature',
    description: 'Specialized notarization for property transactions. We handle deeds, mortgages, refinances, and all real estate-related documents with precision and care.',
    included: [
      'Deeds and titles',
      'Mortgage documents',
      'Property transfer paperwork',
      'Refinance documents',
      'Quitclaim deeds',
      'Grant deeds'
    ],
    needs: [
      'Valid government-issued photo ID',
      'All parties to the transaction present',
      'Unsigned documents',
      'Understanding of transaction terms',
      'Complete document package'
    ],
    uses: 'Essential for home purchases, property sales, title transfers, refinancing, adding/removing names from titles, and estate planning involving property.',
    time: '30-45 minutes (depending on document volume)'
  },

  'loan': {
    icon: '<i class="fa-solid fa-file-contract"></i>',
    title: 'Loan Signing Services',
    price: '$125',
    priceDetail: 'flat rate',
    description: 'Complete loan signing packages for mortgages, refinances, and HELOCs. Experienced with all major lenders and title companies. Professional, thorough, and reliable.',
    included: [
      'Purchase mortgage packages',
      'Refinance signings',
      'HELOC documents',
      'Seller closing packages',
      'Reverse mortgages',
      'Document review and explanation'
    ],
    needs: [
      'Valid government-issued photo ID for all borrowers',
      'All borrowers present at signing',
      'Unsigned loan package',
      '60-90 minutes of time',
      'Private signing location'
    ],
    uses: 'Required for home purchases, mortgage refinancing, home equity lines of credit, reverse mortgages, and seller closing documents.',
    time: '60-90 minutes'
  },

  'legal': {
    icon: '<i class="fa-solid fa-scale-balanced"></i>',
    title: 'Legal Documents',
    price: '$15',
    priceDetail: 'per signature',
    description: 'Professional notarization for legal documents including power of attorney, wills, affidavits, and declarations. Handled with discretion and legal compliance.',
    included: [
      'Power of Attorney (all types)',
      'Affidavits and sworn statements',
      'Declarations',
      'Consent forms',
      'Legal notices',
      'Court documents'
    ],
    needs: [
      'Valid government-issued photo ID',
      'Mental capacity to understand document',
      'Unsigned documents',
      'Witnesses if required by document type',
      'Understanding of legal implications'
    ],
    uses: 'Necessary for establishing power of attorney, court filings, sworn statements, legal affidavits, consent forms, and official declarations.',
    time: '20-40 minutes'
  }
};

// Currently selected service
let selectedService = null;

/**
 * Open service modal with detailed information
 */
function openServiceModal(serviceId) {
  const service = serviceData[serviceId];
  if (!service) return;

  selectedService = serviceId;

  // Populate modal content
  document.getElementById('modalIcon').innerHTML = service.icon;
  document.getElementById('modalTitle').textContent = service.title;
  document.getElementById('modalPrice').innerHTML = `${service.price} <span>${service.priceDetail}</span>`;
  document.getElementById('modalDescription').textContent = service.description;

  // Populate included items
  const includedList = document.getElementById('modalIncluded');
  includedList.innerHTML = '';
  service.included.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    includedList.appendChild(li);
  });

  // Populate needs
  const needsList = document.getElementById('modalNeeds');
  needsList.innerHTML = '';
  service.needs.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    needsList.appendChild(li);
  });

  // Populate uses
  document.getElementById('modalUses').textContent = service.uses;

  // Populate time estimate
  if (service.time) {
    document.getElementById('modalTimeSection').style.display = 'block';
    document.getElementById('modalTime').textContent = service.time;
  } else {
    document.getElementById('modalTimeSection').style.display = 'none';
  }

  // Show modal
  const modal = document.getElementById('serviceModal');
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('active'), 10);

  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

/**
 * Close service modal
 */
function closeServiceModal() {
  const modal = document.getElementById('serviceModal');
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
}

/**
 * Select service and navigate to booking/contact
 */
function selectService() {
  if (!selectedService) return;

  const service = serviceData[selectedService];

  // Close modal
  closeServiceModal();

  // Pre-fill contact form service dropdown
  setTimeout(() => {
    const serviceDropdown = document.getElementById('service');
    if (serviceDropdown) {
      // Map service IDs to dropdown values
      const serviceMap = {
        'general': 'general',
        'mobile': 'mobile',
        'ron': 'ron',
        'real-estate': 'real-estate',
        'loan': 'loan',
        'legal': 'legal'
      };

      const mappedValue = serviceMap[selectedService];
      if (mappedValue) {
        serviceDropdown.value = mappedValue;
        // Highlight the dropdown
        serviceDropdown.style.borderColor = '#b8955a';
        serviceDropdown.style.background = 'rgba(184, 149, 90, 0.1)';
      }
    }

    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navHeight = document.querySelector('.nav').offsetHeight;
      const targetPosition = contactSection.offsetTop - navHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }

    // Show confirmation message
    showServiceSelectedMessage(service.title);
  }, 400);
}

/**
 * Show temporary confirmation message
 */
function showServiceSelectedMessage(serviceName) {
  // Create message element
  const message = document.createElement('div');
  message.className = 'service-selected-message';
  message.innerHTML = `
    <span class="message-icon">✓</span>
    <span class="message-text">${serviceName} selected! Fill out the form below.</span>
  `;

  // Add styles
  message.style.cssText = `
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #b8955a, #a8324a);
    color: #faf7f2;
    padding: 1rem 2rem;
    border-radius: 50px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 500;
    animation: slideDown 0.4s ease;
  `;

  // Add to page
  document.body.appendChild(message);

  // Remove after 4 seconds
  setTimeout(() => {
    message.style.animation = 'slideUp 0.4s ease';
    setTimeout(() => message.remove(), 400);
  }, 4000);
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeServiceModal();
  }
});

// Prevent modal content clicks from closing modal
document.addEventListener('DOMContentLoaded', () => {
  const modalContent = document.querySelector('.modal-content');
  if (modalContent) {
    modalContent.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
});
