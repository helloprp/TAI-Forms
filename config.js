// All form data lives here — no backend, no Apps Script needed.
// Each entry points at a PDF file that must sit in the /forms folder
// of this same website, using the exact filename given below.
//
// Coordinates were measured directly from your original PDFs (in PDF
// points, from the top-left of the page) — no need to touch these
// unless a template gets replaced with a re-laid-out version.

const FORM_LIBRARY = {
  'handbook': {
    formName: 'Employee Handbook - Acknowledgment',
    description: 'Confirms you\u2019ve read the employee handbook and workplace policies.',
    pdfFile: 'forms/handbook.pdf',
    fields: {
      fullName: [{ page: 45, x: 68.4, topAnchor: 455.5, gap: 3, size: 11 }],
      signature: [{ page: 45, x0: 68.4, x1: 462.9, topAnchor: 528.7, gap: 4, height: 20, widthFrac: 0.9 }],
      date: [{ page: 45, x: 68.4, topAnchor: 602.0, gap: 3, size: 11 }]
    }
  },
  'code-of-discipline': {
    formName: 'Code of Discipline',
    description: 'Acknowledges the company\u2019s conduct and discipline standards.',
    pdfFile: 'forms/code-of-discipline.pdf',
    fields: {
      signature: [{ page: 8, x0: 70.7, x1: 225.6, topAnchor: 724.3, gap: 6, height: 22, widthFrac: 0.9 }],
      date: [{ page: 8, x: 70.7, topAnchor: 787.6, gap: 6, size: 10 }]
    }
  },
  'consent-release': {
    formName: 'Consent and Release Form',
    description: 'Permission to use your name or image in company materials.',
    pdfFile: 'forms/consent-release.pdf',
    fields: {
      fullName: [{ page: 0, x: 151.8, topAnchor: 635.4, gap: 3, size: 10 }],
      signature: [{ page: 0, x0: 162.8, x1: 309.0, topAnchor: 662.4, gap: 3, height: 16, widthFrac: 0.9 }],
      date: [{ page: 0, x: 130.9, topAnchor: 716.4, gap: 3, size: 10 }]
    }
  },
  'drug-test': {
    formName: 'Drug Testing Manifesto',
    description: 'Consent to drug testing per company policy.',
    pdfFile: 'forms/drug-test.pdf',
    fields: {
      signature: [{ page: 0, x0: 299.2, x1: 498.8, topAnchor: 277.1, gap: 4, height: 18, widthFrac: 0.9 }]
    }
  },
  'confidentiality': {
    formName: 'Employee Confidentiality Agreement',
    description: 'Your agreement to keep company and client information confidential.',
    pdfFile: 'forms/confidentiality.pdf',
    fields: {
      date: [{ page: 0, x: 74.7, topAnchor: 634.8, gap: 3, size: 10 }],
      signature: [{ page: 0, x0: 288.0, x1: 497.2, topAnchor: 634.8, gap: 3, height: 56, widthFrac: 0.9 }]
    }
  },
  'declaration': {
    formName: 'Employee Declaration',
    description: 'Confirms you\u2019ve read and accepted the onboarding policy.',
    pdfFile: 'forms/declaration.pdf',
    fields: {
      fullName: [{ page: 0, x: 85, topAnchor: 181.0, gap: 3, size: 10 }],
      signature: [{ page: 0, x0: 77.4, x1: 256.7, topAnchor: 287.5, gap: 2, height: 48, widthFrac: 0.9 }],
      date: [{ page: 0, x: 324.0, topAnchor: 288.3, gap: 3, size: 10 }]
    }
  },
  'nda': {
    formName: 'Non-Disclosure and Confidentiality Agreement',
    description: 'Protects trade secrets and confidential business information.',
    pdfFile: 'forms/nda.pdf',
    fields: {
      fullName: [{ page: 0, x: 80, topAnchor: 531.0, gap: 0, size: 9 }],
      signature: [{ page: 0, x0: 75, x1: 240, topAnchor: 565.2, gap: 3, height: 11, widthFrac: 0.85 }]
    }
  },
  'employment-agreement': {
    formName: 'Employment Agreement',
    description: 'Your formal offer and terms of employment.',
    pdfFile: 'forms/employment-agreement.pdf',
    fields: {
      signature: [{ page: 5, x0: 72.0, x1: 206.0, topAnchor: 547.1, gap: 6, height: 28, widthFrac: 0.9 }]
    }
  },
  'ip-agreement': {
    formName: 'Intellectual Property Agreement',
    description: 'Assigns work-related intellectual property to the company.',
    pdfFile: 'forms/ip-agreement.pdf',
    fields: {
      date: [{ page: 1, x: 105.8, topAnchor: 523.0, gap: 2, size: 9 }],
      signature: [{ page: 1, x0: 171.8, x1: 350.0, topAnchor: 509.8, gap: 2, height: 10, widthFrac: 0.9 }]
    }
  },
  'wfa-agreement': {
    formName: 'Work From Anywhere Agreement',
    description: 'Terms for remote or flexible work arrangements.',
    pdfFile: 'forms/wfa-agreement.pdf',
    fields: {
      signature: [{ page: 4, x0: 54.0, x1: 190.6, topAnchor: 608.0, gap: 3, height: 16, widthFrac: 0.9 }]
    }
  }
};

// Shown to the applicant after every signed download — edit this to
// your real HR contact / instructions.
const AFTER_SIGNING_INSTRUCTIONS =
  'Upload this file to a Google Drive folder, then share that folder ' +
  'with HR at <strong>PASTE_HR_EMAIL_HERE</strong>.';
