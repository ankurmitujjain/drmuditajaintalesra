/**
 * Single source of truth for doctor credentials, NAP, clinic details, and links.
 * All templates, components, and schemas consume this data.
 */

export const site = {
  domain: "https://drmuditajaintalesra.com",
  brandName: "Dr. Mudita Jain Talesra",
  clinicName: "Mudita Women Health Care Center",
  headline: "Gynecologist, Obstetrician & Laparoscopic Surgeon in Bhopal",
  description: "Dr. Mudita Jain Talesra (MS, FMAS, FICOG) is an experienced gynecologist and laparoscopic surgeon in Bhopal with 17+ years of experience in pregnancy care, keyhole surgery, and women's health.",

  doctor: {
    name: "Dr. Mudita Jain Talesra",
    registeredName: "Dr. Jain (Miss) Mudita Ashok Kumar",
    honorificPrefix: "Dr.",
    gender: "Female",
    qualifications: "MBBS, MS (Obstetrics & Gynaecology), FMAS, FICOG",
    additionalFellowships: "FMFI, Master's in Cosmetic Gynecology",
    experienceYears: "17+",
    councilRegistration: "Madhya Pradesh Medical Council",
    registrationNumber: "MP-8475",
    registrationYear: "2007",
    degrees: [
      {
        degree: "MBBS",
        college: "Shri Bhausaheb Hire Government Medical College, Dhule",
        university: "Maharashtra University of Health Sciences, Nashik",
        year: "2004",
      },
      {
        degree: "MS (Obstetrics & Gynaecology)",
        college: "Gajra Raja Medical College, Gwalior",
        university: "Jiwaji University, Gwalior",
        year: "2011",
      },
      {
        degree: "FMAS (Fellowship in Minimal Access Surgery)",
        institution: "Association of Minimal Access Surgeons of India (AMASI)",
        year: "2018",
      },
      {
        degree: "FICOG (Fellow of Indian College of Obstetricians & Gynaecologists)",
        institution: "ICOG / FOGSI",
        year: "2022",
      },
    ],
    currentRole: "Lead Consultant & Founder, Mudita Women Health Care Center, Gulmohar Colony, Bhopal",
    formerRole: "Former Professor & HOD (Obstetrics & Gynaecology), RKDF Medical College, Bhopal",
    specialties: [
      "Obstetrics & Antenatal Care",
      "High-Risk Pregnancy Management",
      "Minimally Invasive Laparoscopic Surgery",
      "Cosmetic & Reconstructive Gynecology",
      "Infertility Evaluation & IUI Guidance",
      "Cervical Health & Cancer Screening (Pap Smear / HPV)",
      "Urogynaecology & Pelvic Floor Repair",
    ],
    trainership: "National Master Trainer for HPV Vaccination, Comprehensive Abortion Care (CAC), and Subdermal Contraceptive Implants",
    additionalTraining: [
      "Fellowship in Minimal Access Surgery (FMAS)",
      "Master's in Reconstructive & Cosmetic Gynaecology",
      "FOGSI-recognised Infertility Training",
      "FOGSI-recognised Ultrasound (USG) Training",
    ],
    societyRoles: [
      "Past Secretary, Bhopal Obstetrics & Gynaecological Society (BOGS)",
      "Past Treasurer, BOGS (2019–20)",
      "Past Joint Secretary, Bhopal Menopause Society (2019)",
      "Executive Member, AMPOGS (Association of MP Obstetric & Gynaecological Societies, 2015)",
    ],
    memberships: [
      "WALS (World Association of Laparoscopic Surgeons) - Life Member",
      "IMS (Indian Menopause Society) - Life Member",
      "BOGS (Bhopal Obstetrics & Gynaecological Society) - Life Member",
      "IMA (Indian Medical Association) - Life Member",
      "ICOG (Indian College of Obstetricians & Gynaecologists) - Fellow (FICOG)",
      "FOGSI (Federation of Obstetric and Gynaecological Societies of India)",
    ],
    facultyRoles: [
      "Faculty for FORCE PG Update (2015, 2019)",
      "Faculty on Medical Learning Hub (Courses: Clinical Innovations in OBG, Rainbow of OBG & Endoscopy)",
      "Invited Faculty and Speaker across National & State OBG CMEs",
    ],
    studentCommunityUrl: "https://chat.whatsapp.com/GJb5L8SBijnBilP0eubGrR",
    awards: [
      "ICOG Convocation 2022 Felicitation for Academic Excellence",
      "Naari Astitva Award for Dedicated Women Healthcare",
      "Tullika Samajik Samman for Community Health Contribution",
      "Honoured by Shri Vishwas Sarang (Former Minister of Medical Education, MP) at Facility Inauguration",
    ],
    languages: ["Hindi", "English"],
  },

  nap: {
    address: {
      street: "E-8, Plot No. G-1/24-25, Gulmohar Colony",
      locality: "Gulmohar Colony",
      area: "Trilanga / Shahpura",
      city: "Bhopal",
      state: "Madhya Pradesh",
      postalCode: "462039",
      country: "IN",
    },
    geo: {
      latitude: "23.1950",
      longitude: "77.4350",
    },
    hours: {
      days: "Monday – Friday",
      time: "5:00 PM – 8:00 PM",
      daysShort: "Mon–Fri 5:00 PM – 8:00 PM",
      weekend: "Saturday & Sunday Closed",
      schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "17:00",
      closes: "20:00",
    },
    phones: {
      whatsapp: "+91 99938 95629",
      whatsappRaw: "919993895629",
      call: "+91 83197 75863",
      callRaw: "+918319775863",
    },
    email: "muditajain2000@gmail.com",
    mapsCidUrl: "https://maps.google.com/?cid=17123718235604844238",
    reviewUrl: "https://g.page/r/CXwu68oQCV83EAE/review",
  },

  socials: {
    youtubePatient: "https://www.youtube.com/@DrMuditaJainTalesra",
    youtubeStudent: "https://www.youtube.com/@DrMuditaJainVault",
    instagram: "https://www.instagram.com/drmuditajaintalesra/",
    facebook: "https://www.facebook.com/MuditaJainTalesra",
    practo: "https://www.practo.com/bhopal/doctor/mudita-jain-gynecologist-obstetrician",
    justdial: "https://www.justdial.com/Bhopal/Dr--Mudita-Jain-Gulmohar-Colony/0755PX755-X755-140207162354-Y8A3_BZDET?via=scode",
    medicalLearningHub: "https://medicallearninghub.com/faculty/prof-dr-mudita-jain-talesra",
  },

  analytics: {
    gtmId: "GTM-KTNGJW3Z",
    ga4Id: "G-R45CXSB5JJ",
  },
};
