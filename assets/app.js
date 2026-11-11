// State & Default Data (Matches exactly the attached Stride K12 image)
const defaultState = {
  // Browser bar
  securityText: "Connection Secure",
  browserUrl: "https://www.stridelearning.com/k12/staff/benjamin-anderson",
  
  // Header
  brandMain: "Stride",
  brandTag: "K12",
  portalTitle: "Educator Portal 2025-2026",
  accentColor: "#f26522",
  schoolLogoUrl: "",

  // Profile General
  facultyName: "Benjamin Anderson",
  facultyInitials: "BA",
  avatarType: "initials", // 'initials' or 'image'
  avatarImageUrl: "",
  facultySubtitle: "Academic Leadership & Compliance",
  
  // Status Badge
  statusBadgeText: "ACTIVE FACULTY",
  statusBadgeColor: "green", // green, blue, orange, purple

  // Address
  officeAddress: "Tampa Office\n157 Broad Lane\nFloor 9\nTampa, CA 10703",

  // Digital Contact
  corporateId: "K12-CA-2026",
  email: "benjamin.anderson@k12.com",

  // 2x2 Meta Attributes
  meta1Label: "CURRENT TERM",
  meta1Value: "2025 - 2026 Academic Year",
  
  meta2Label: "ORGANIZATION",
  meta2Value: "K12, Inc. / Stride, Inc.",

  meta3Label: "LOCATION",
  meta3Value: "Tampa, California (HQ)",

  meta4Label: "STATUS",
  meta4Value: "Full-Time Verified Faculty",

  // Bio Description
  bioText: "Welcome to the Stride K12 Educator Profile. Benjamin Anderson supports our instructional teams to provide high-quality, digital-first education to students across the nation. For the 2025-2026 academic year, our focus remains on expanding accessible learning programs and educator resources.",

  // Faculty Documentation Heading & Files
  docHeading: "Faculty Documentation:",
  docs: [
    { id: 1, name: "Educator Employment Record 2025-26.pdf" },
    { id: 2, name: "K12 Digital Curriculum Guide.pdf" },
    { id: 3, name: "Stride Corporate Faculty ID - Anderson.pdf" }
  ],

  // Footer
  footerAddress: "Stride, Inc. (K12) Headquarters\nTampa, CA 10703\n(222) 400-7838",
  footerCopyright: "© 2026 Stride Learning | K12 Inc.\nExcellence in Online Education"
};

// Presets Collection
const presets = {
  stride: defaultState,
  demille: {
    securityText: "Connection Secure",
    browserUrl: "https://demille.wsdk8.us/staff/my-viet-academy/benjamin-anderson",
    brandMain: "DeMille",
    brandTag: "My Viet Academy",
    portalTitle: "Educator Portal 2025-2026",
    accentColor: "#0284c7",
    facultyName: "Benjamin Anderson",
    facultyInitials: "BA",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Dual Language Immersion & Academic Leadership",
    statusBadgeText: "ACTIVE FACULTY",
    statusBadgeColor: "green",
    officeAddress: "Cecil B. DeMille Elementary\nMy Viet Language Academy\n15400 Bushard St\nMidway City, CA 92655",
    corporateId: "WSD-MVLA-2026",
    email: "banderson@wsdk8.us",
    meta1Label: "CURRENT TERM",
    meta1Value: "2025 - 2026 Academic Year",
    meta2Label: "ORGANIZATION",
    meta2Value: "Cecil B. DeMille My Viet Language Academy",
    meta3Label: "LOCATION",
    meta3Value: "Midway City, California",
    meta4Label: "STATUS",
    meta4Value: "Full-Time Verified Faculty",
    bioText: "Welcome to the Cecil B. DeMille My Viet Language Academy Educator Profile. Benjamin Anderson supports our dual immersion instructional teams to provide high-quality bilingual education and cultural leadership. For the 2025-2026 academic year, our focus remains on expanding accessible learning programs and educator resources.",
    docHeading: "Faculty Documentation:",
    docs: [
      { id: 1, name: "Educator Employment Record 2025-26.pdf" },
      { id: 2, name: "My Viet Dual Language Curriculum Guide.pdf" },
      { id: 3, name: "WSD Faculty ID - DeMille Academy.pdf" }
    ],
    footerAddress: "Cecil B. DeMille My Viet Language Academy\n15400 Bushard St, Midway City, CA 92655\n(714) 894-7212",
    footerCopyright: "© 2026 Westminster School District | DeMille Academy\nExcellence in Dual Language Immersion Education"
  },
  fcps: {
    securityText: "Connection Secure",
    browserUrl: "https://www.fcps.edu/staff-directory/faculty/robert-carter",
    brandMain: "FCPS",
    brandTag: "Public Schools",
    portalTitle: "Educator & Staff Portal 2025-2026",
    accentColor: "#004b87",
    facultyName: "Robert Carter",
    facultyInitials: "RC",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Department of Advanced Academics & AP Instruction",
    statusBadgeText: "ACTIVE FACULTY",
    statusBadgeColor: "green",
    officeAddress: "Gatehouse Administration Center\n8115 Gatehouse Road\nFalls Church, VA 22042",
    corporateId: "FCPS-EMP-2026-5819",
    email: "rcarter@fcps.edu",
    meta1Label: "CURRENT TERM",
    meta1Value: "2025 - 2026 Academic Year",
    meta2Label: "ORGANIZATION",
    meta2Value: "Fairfax County Public Schools (FCPS)",
    meta3Label: "LOCATION",
    meta3Value: "Fairfax County, Virginia (HQ)",
    meta4Label: "STATUS",
    meta4Value: "Full-Time Certified Faculty",
    bioText: "Welcome to the Fairfax County Public Schools Educator Profile. Robert Carter coordinates high-rigor Advanced Academic Programs (AAP) and secondary curriculum initiatives for the 2025-2026 academic year across Fairfax County schools.",
    docHeading: "Faculty Documentation:",
    docs: [
      { id: 1, name: "FCPS Educator Employment Record 2025-26.pdf" },
      { id: 2, name: "FCPS Advanced Academic Program Guide.pdf" },
      { id: 3, name: "FCPS Corporate Faculty ID - Carter.pdf" }
    ],
    footerAddress: "Fairfax County Public Schools (FCPS) Headquarters\n8115 Gatehouse Road, Falls Church, VA 22042\n(571) 423-1000",
    footerCopyright: "© 2026 Fairfax County Public Schools | Virginia\nExcellence, Equity, and Opportunity in Education"
  },
  fcps_student: {
    securityText: "Connection Secure",
    browserUrl: "https://sisstudent.fcps.edu/student/portal/alexander-davis",
    brandMain: "FCPS",
    brandTag: "Public Schools",
    portalTitle: "SIS Student Portal 2025-2026",
    accentColor: "#004b87",
    facultyName: "Alexander Davis",
    facultyInitials: "AD",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Thomas Jefferson High School for Science & Technology • Grade 11",
    statusBadgeText: "ENROLLED STUDENT",
    statusBadgeColor: "green",
    officeAddress: "Thomas Jefferson High School for Science & Technology\n6560 Braddock Rd\nAlexandria, VA 22312",
    corporateId: "FCPS-STU-2026-3841",
    email: "adavis@fcpsschools.net",
    meta1Label: "ACADEMIC TERM",
    meta1Value: "2025 - 2026 Academic Year",
    meta2Label: "SCHOOL DIVISION",
    meta2Value: "Fairfax County Public Schools (FCPS)",
    meta3Label: "CAMPUS",
    meta3Value: "TJHSST - Alexandria, VA",
    meta4Label: "ENROLLMENT STATUS",
    meta4Value: "Full-Time Registered Student",
    bioText: "Welcome to the Fairfax County Public Schools SIS Student Portal. Alexander Davis is an enrolled scholar at Thomas Jefferson High School for Science and Technology pursuing STEM and computer research coursework for the 2025-2026 academic year.",
    docHeading: "Student Documentation & Records:",
    docs: [
      { id: 1, name: "FCPS Student Enrollment Verification 2025-26.pdf" },
      { id: 2, name: "Official High School Academic Transcript 2025-26.pdf" },
      { id: 3, name: "FCPS Student ID Card - TJHSST.pdf" }
    ],
    footerAddress: "Fairfax County Public Schools (FCPS) Student Services\n8115 Gatehouse Rd, Falls Church, VA 22042\n(571) 423-1000",
    footerCopyright: "© 2026 Fairfax County Public Schools | Virginia\nAll Rights Reserved. Excellence in Public Education"
  },
  lausd: {
    securityText: "Connection Secure",
    browserUrl: "https://ess.lausd.net/staff-directory/faculty/carlos-mendoza",
    brandMain: "LAUSD",
    brandTag: "Unified",
    portalTitle: "Employee Self-Service (ESS) 2025-2026",
    accentColor: "#0d5257",
    facultyName: "Carlos Mendoza",
    facultyInitials: "CM",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Department of Mathematics & Secondary STEM Education",
    statusBadgeText: "ACTIVE FACULTY",
    statusBadgeColor: "green",
    officeAddress: "Beaudry Administrative Headquarters\n333 S Beaudry Ave, 24th Floor\nLos Angeles, CA 90017",
    corporateId: "LAUSD-EMP-0622710",
    email: "carlos.mendoza@lausd.net",
    meta1Label: "CURRENT TERM",
    meta1Value: "2025 - 2026 Academic Year",
    meta2Label: "ORGANIZATION",
    meta2Value: "Los Angeles Unified School District (LAUSD)",
    meta3Label: "LOCATION & NCES",
    meta3Value: "Los Angeles, California (NCES: 0622710)",
    meta4Label: "CREDENTIAL STATUS",
    meta4Value: "Full-Time Regular Certificated Faculty",
    bioText: "Welcome to the Los Angeles Unified School District Educator Profile. Carlos Mendoza provides rigorous instruction in secondary mathematics and honors STEM curricula across Region East schools for the 2025-2026 academic year.",
    docHeading: "Faculty Documentation:",
    docs: [
      { id: 1, name: "LAUSD Educator Employment Record 2025-26.pdf" },
      { id: 2, name: "LAUSD Certificated Faculty ID - Mendoza.pdf" },
      { id: 3, name: "Faculty Paystub & Earnings Statement 2025-26.pdf" }
    ],
    footerAddress: "Los Angeles Unified School District (LAUSD) Headquarters\n333 S Beaudry Ave, Los Angeles, CA 90017\n(213) 241-1000",
    footerCopyright: "© 2026 Los Angeles Unified School District | California\nAll Youth Achieving - Excellence in Public Education"
  },
  ccsd: {
    securityText: "Connection Secure",
    browserUrl: "https://my.ccsd.net/staff-directory/david-sullivan",
    brandMain: "CCSD",
    brandTag: "Nevada",
    portalTitle: "Staff & Educator Portal 2025-2026",
    accentColor: "#002d62",
    facultyName: "David Sullivan",
    facultyInitials: "DS",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Department of Curriculum & Secondary Instruction",
    statusBadgeText: "ACTIVE FACULTY",
    statusBadgeColor: "green",
    officeAddress: "Greer Education Center\n5100 W Sahara Ave\nLas Vegas, NV 89146",
    corporateId: "CCSD-NV-2026-9481",
    email: "sullivand@nv.ccsd.net",
    meta1Label: "CURRENT TERM",
    meta1Value: "2025 - 2026 Academic Year",
    meta2Label: "ORGANIZATION",
    meta2Value: "Clark County School District (CCSD)",
    meta3Label: "LOCATION & NCES",
    meta3Value: "Las Vegas, Nevada (NCES: 3200060)",
    meta4Label: "EMPLOYMENT STATUS",
    meta4Value: "Full-Time Licensed Faculty",
    bioText: "Welcome to the Clark County School District Staff Profile. David Sullivan coordinates secondary curriculum development and advanced academic achievement programs across Region 1 schools for the 2025-2026 academic cycle.",
    docHeading: "Faculty Documentation:",
    docs: [
      { id: 1, name: "CCSD Educator Employment Record 2025-26.pdf" },
      { id: 2, name: "CCSD Corporate Faculty ID - Sullivan.pdf" },
      { id: 3, name: "Faculty Paystub & Earnings Statement 2025-26.pdf" }
    ],
    footerAddress: "Clark County School District Headquarters\n5100 W Sahara Ave, Las Vegas, NV 89146\n(702) 799-5000",
    footerCopyright: "© 2026 Clark County School District | Nevada\nEngage, Educate, Empower Every Student"
  },
  mdcps: {
    securityText: "Connection Secure",
    browserUrl: "https://employees.dadeschools.net/directory/faculty/maria-hernandez",
    brandMain: "M-DCPS",
    brandTag: "Public Schools",
    portalTitle: "Employee Portal & Staff Directory 2025-2026",
    accentColor: "#00477e",
    facultyName: "Maria Hernandez",
    facultyInitials: "MH",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Bilingual Education & World Languages Department",
    statusBadgeText: "ACTIVE FACULTY",
    statusBadgeColor: "green",
    officeAddress: "School Board Administration Building\n1450 NE 2nd Ave\nMiami, FL 33132",
    corporateId: "MDCPS-FAC-2026-7731",
    email: "mhernandez@dadeschools.net",
    meta1Label: "CURRENT TERM",
    meta1Value: "2025 - 2026 Academic Year",
    meta2Label: "ORGANIZATION",
    meta2Value: "Miami-Dade County Public Schools (M-DCPS)",
    meta3Label: "LOCATION & NCES",
    meta3Value: "Miami, Florida (NCES: 1200390)",
    meta4Label: "STATUS",
    meta4Value: "Full-Time Certified Faculty",
    bioText: "Welcome to the Miami-Dade County Public Schools Educator Portal. Maria Hernandez leads instructional frameworks in dual-language immersion and advanced secondary placement for the 2025-2026 academic year.",
    docHeading: "Faculty Documentation:",
    docs: [
      { id: 1, name: "M-DCPS Educator Employment Record 2025-26.pdf" },
      { id: 2, name: "M-DCPS Corporate Faculty ID - Hernandez.pdf" },
      { id: 3, name: "Faculty Paystub & Earnings Statement 2025-26.pdf" }
    ],
    footerAddress: "Miami-Dade County Public Schools Headquarters\n1450 NE 2nd Ave, Miami, FL 33132\n(305) 995-1000",
    footerCopyright: "© 2026 Miami-Dade County Public Schools | Florida\nGiving Our Students The World"
  },
  hisd: {
    securityText: "Connection Secure",
    browserUrl: "https://www.houstonisd.org/staff-directory/james-washington",
    brandMain: "Houston",
    brandTag: "ISD",
    portalTitle: "Houston ISD Staff Directory 2025-2026",
    accentColor: "#005a9c",
    facultyName: "James Washington",
    facultyInitials: "JW",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Advanced Placement & College Readiness Faculty",
    statusBadgeText: "ACTIVE FACULTY",
    statusBadgeColor: "green",
    officeAddress: "Hattie Mae White Educational Support Center\n4400 W 18th St\nHouston, TX 77092",
    corporateId: "HISD-TX-2026-4412",
    email: "jwashington@houstonisd.org",
    meta1Label: "CURRENT TERM",
    meta1Value: "2025 - 2026 Academic Year",
    meta2Label: "ORGANIZATION",
    meta2Value: "Houston Independent School District (HISD)",
    meta3Label: "LOCATION & NCES",
    meta3Value: "Houston, Texas (NCES: 4823640)",
    meta4Label: "STATUS",
    meta4Value: "Full-Time Certified Faculty",
    bioText: "Welcome to the Houston Independent School District Educator Dossier. James Washington coordinates AP Capstone seminars and secondary STEM readiness initiatives for the 2025-2026 academic year.",
    docHeading: "Faculty Documentation:",
    docs: [
      { id: 1, name: "HISD Educator Employment Record 2025-26.pdf" },
      { id: 2, name: "HISD Corporate Faculty ID - Washington.pdf" },
      { id: 3, name: "Faculty Paystub & Earnings Statement 2025-26.pdf" }
    ],
    footerAddress: "Houston Independent School District Headquarters\n4400 W 18th St, Houston, TX 77092\n(713) 556-6000",
    footerCopyright: "© 2026 Houston Independent School District | Texas\nEquipping Students For Global Success"
  },
  connections: {
    securityText: "Connection Secure",
    browserUrl: "https://www.connectionsacademy.com/educator-portal/rachel-bennett",
    brandMain: "Connections",
    brandTag: "Academy",
    portalTitle: "Educator Learning Portal 2025-2026",
    accentColor: "#e65100",
    facultyName: "Rachel Bennett",
    facultyInitials: "RB",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Department of Secondary Digital Curriculum & Instruction",
    statusBadgeText: "ACTIVE FACULTY",
    statusBadgeColor: "green",
    officeAddress: "Connections Education Center\n10960 Grantchester Way, Suite 300\nColumbia, MD 21044",
    corporateId: "CA-ONLINE-2026-8802",
    email: "rachel.bennett@connectionsacademy.com",
    meta1Label: "CURRENT TERM",
    meta1Value: "2025 - 2026 Academic Year",
    meta2Label: "ORGANIZATION",
    meta2Value: "Connections Academy Online / Pearson",
    meta3Label: "ACCREDITATION",
    meta3Value: "Columbia, Maryland (Cognia Accredited K-12)",
    meta4Label: "FACULTY STATUS",
    meta4Value: "Full-Time Certified Faculty",
    bioText: "Welcome to the Connections Academy Educator Profile. Rachel Bennett delivers high-quality synchronous digital education and standards-aligned virtual curriculum for students nationwide for the 2025-2026 academic year.",
    docHeading: "Faculty Documentation:",
    docs: [
      { id: 1, name: "Connections Academy Employment Record 2025-26.pdf" },
      { id: 2, name: "Connections Academy Faculty ID - Bennett.pdf" },
      { id: 3, name: "Faculty Paystub & Earnings Statement 2025-26.pdf" }
    ],
    footerAddress: "Connections Academy / Pearson Virtual Schools\n10960 Grantchester Way, Columbia, MD 21044\n(800) 382-6010",
    footerCopyright: "© 2026 Connections Academy | Pearson Education\nAccredited High-Quality Online Public Schools"
  },
  stanford: {
    securityText: "Connection Secure",
    browserUrl: "https://onlinehighschool.stanford.edu/faculty/sarah-jenkins",
    brandMain: "Stanford",
    brandTag: "Online",
    portalTitle: "Faculty & Staff Directory 2025-2026",
    accentColor: "#8c1515",
    facultyName: "Dr. Sarah Jenkins",
    facultyInitials: "SJ",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Department of Humanities & Advanced Placement",
    statusBadgeText: "VERIFIED FACULTY",
    statusBadgeColor: "blue",
    officeAddress: "Stanford Online High School\n415 Broadway, Academy Hall\nStanford, CA 94305",
    corporateId: "SU-OHS-8821",
    email: "sjenkins@stanford.edu",
    meta1Label: "ACADEMIC APPOINTMENT",
    meta1Value: "Distinguished Teaching Fellow",
    meta2Label: "INSTITUTION",
    meta2Value: "Stanford University / OHS",
    meta3Label: "CAMPUS BASE",
    meta3Value: "Palo Alto, California",
    meta4Label: "CREDENTIAL STATUS",
    meta4Value: "Full Credentials Active",
    bioText: "Welcome to the Stanford Online High School Faculty Profile. Dr. Sarah Jenkins coordinates high-rigor humanities seminar courses for talented scholars globally. For this academic cycle, initiatives center on synchronous virtual colloquia and interdisciplinary research publications.",
    docHeading: "Academic & Employment Records:",
    docs: [
      { id: 1, name: "Stanford Faculty Appointment Letter 2025-26.pdf" },
      { id: 2, name: "Syllabus & Seminar Guidelines - Spring 2026.pdf" },
      { id: 3, name: "University Faculty Credential Badge - Jenkins.pdf" }
    ],
    footerAddress: "Stanford Online High School\n415 Broadway, Stanford, CA 94305\n(650) 723-2300",
    footerCopyright: "© 2026 Stanford University\nAll Rights Reserved. Excellence in Education"
  },
  mit: {
    securityText: "Connection Secure",
    browserUrl: "https://openlearning.mit.edu/instructors/michael-chang",
    brandMain: "MIT",
    brandTag: "OpenLearning",
    portalTitle: "Digital Learning Fellow Portal",
    accentColor: "#a31f34",
    facultyName: "Prof. Michael Chang",
    facultyInitials: "MC",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "EECS & Advanced Computational Sciences",
    statusBadgeText: "ACTIVE FACULTY",
    statusBadgeColor: "green",
    officeAddress: "Stata Center, Bldg 32-G\n77 Massachusetts Ave\nCambridge, MA 02139",
    corporateId: "MIT-ID-9042",
    email: "mchang@mit.edu",
    meta1Label: "CURRENT TERM",
    meta1Value: "2025 - 2026 Academic Year",
    meta2Label: "ORGANIZATION",
    meta2Value: "MIT Open Learning / EECS",
    meta3Label: "LOCATION",
    meta3Value: "Cambridge, Massachusetts",
    meta4Label: "VERIFICATION STATUS",
    meta4Value: "Tenured / Institute Verified",
    bioText: "Welcome to the MIT Open Learning digital instructor dossier. Prof. Michael Chang leads research in distributed architectures and provides instructional frameworks for worldwide engineering cohorts.",
    docHeading: "Faculty Documentation & Verification:",
    docs: [
      { id: 1, name: "MIT Faculty Employment Verification 2025.pdf" },
      { id: 2, name: "Department of EECS Faculty Certificate.pdf" }
    ],
    footerAddress: "Massachusetts Institute of Technology\n77 Massachusetts Ave, Cambridge, MA\n(617) 253-1000",
    footerCopyright: "© 2026 MIT Open Learning\nMassachusetts Institute of Technology"
  },
  demille_student: {
    securityText: "Connection Secure",
    browserUrl: "https://demille.wsdk8.us/student/portal/tran-minh-quan",
    brandMain: "DeMille",
    brandTag: "My Viet Academy",
    portalTitle: "Student & Family Portal 2025-2026",
    accentColor: "#0284c7",
    facultyName: "Tran Minh Quan",
    facultyInitials: "TQ",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Vietnamese Dual Language Immersion Program • Grade 8 Honors",
    statusBadgeText: "ENROLLED STUDENT",
    statusBadgeColor: "green",
    officeAddress: "Cecil B. DeMille Middle School Campus\n15400 Bushard St\nMidway City, CA 92655",
    corporateId: "WSD-STU-2026-9042",
    email: "m.tran@wsdk8.us",
    meta1Label: "ACADEMIC YEAR",
    meta1Value: "2025 - 2026 Academic Year",
    meta2Label: "INSTITUTION",
    meta2Value: "Cecil B. DeMille My Viet Language Academy",
    meta3Label: "PROGRAM & TRACK",
    meta3Value: "Dual Language Immersion / STEM Track",
    meta4Label: "ENROLLMENT STATUS",
    meta4Value: "Full-Time Verified Student",
    bioText: "Welcome to the Cecil B. DeMille My Viet Language Academy Student Dossier. Tran Minh Quan is actively enrolled in the Vietnamese Dual Language Immersion Program with full honors coursework for the 2025-2026 academic year.",
    docHeading: "Student Documentation & Records:",
    docs: [
      { id: 1, name: "Student Enrollment Verification 2025-26.pdf" },
      { id: 2, name: "Academic Transcript & Progress Report 2025-26.pdf" },
      { id: 3, name: "Student ID Card - DeMille Academy.pdf" }
    ],
    footerAddress: "Cecil B. DeMille My Viet Language Academy\n15400 Bushard St, Midway City, CA 92655\n(714) 894-7212",
    footerCopyright: "© 2026 Westminster School District | DeMille Academy\nExcellence in Bilingual & Bicultural Education"
  },
  stride_student: {
    securityText: "Connection Secure",
    browserUrl: "https://www.stridelearning.com/k12/student/lucas-anderson",
    brandMain: "Stride",
    brandTag: "K12",
    portalTitle: "Student Learning Portal 2025-2026",
    accentColor: "#f26522",
    facultyName: "Lucas Anderson",
    facultyInitials: "LA",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Online High School Diploma Program • Grade 11",
    statusBadgeText: "ACTIVE STUDENT",
    statusBadgeColor: "blue",
    officeAddress: "Tampa Regional Student Center\n157 Broad Lane, Floor 9\nTampa, FL 10703",
    corporateId: "K12-STU-2026-4410",
    email: "lucas.anderson@k12.com",
    meta1Label: "CURRENT TERM",
    meta1Value: "2025 - 2026 Academic Year",
    meta2Label: "ORGANIZATION",
    meta2Value: "K12, Inc. / Stride Learning Online",
    meta3Label: "GRADE & PROGRAM",
    meta3Value: "Grade 11 - College Preparatory",
    meta4Label: "STUDENT STATUS",
    meta4Value: "Active Full-Time Student",
    bioText: "Welcome to the Stride K12 Student Learning Profile. Lucas Anderson is pursuing digital-first secondary education with advanced placement curriculum for the 2025-2026 academic year.",
    docHeading: "Student Documentation:",
    docs: [
      { id: 1, name: "Student Enrollment Record 2025-26.pdf" },
      { id: 2, name: "High School Academic Progress Report.pdf" },
      { id: 3, name: "Stride Corporate Student ID - Anderson.pdf" }
    ],
    footerAddress: "Stride, Inc. (K12) Student Services Headquarters\nTampa, CA 10703\n(222) 400-7838",
    footerCopyright: "© 2026 Stride Learning | K12 Inc.\nExcellence in Online Education"
  },
  stanford_student: {
    securityText: "Connection Secure",
    browserUrl: "https://onlinehighschool.stanford.edu/students/emily-zhang",
    brandMain: "Stanford",
    brandTag: "Online",
    portalTitle: "Student & Scholar Directory 2025-2026",
    accentColor: "#8c1515",
    facultyName: "Emily Zhang",
    facultyInitials: "EZ",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "AP Capstone Diploma Candidate • Class of 2026",
    statusBadgeText: "ENROLLED STUDENT",
    statusBadgeColor: "green",
    officeAddress: "Stanford Online High School\n415 Broadway, Academy Hall\nStanford, CA 94305",
    corporateId: "SU-STU-2026-7781",
    email: "ezhang@stanford.edu",
    meta1Label: "ACADEMIC TERM",
    meta1Value: "2025 - 2026 Academic Year",
    meta2Label: "INSTITUTION",
    meta2Value: "Stanford University / OHS",
    meta3Label: "PROGRAM",
    meta3Value: "Full-Time Advanced Placement Honors",
    meta4Label: "ENROLLMENT STATUS",
    meta4Value: "Good Standing / Enrolled Scholar",
    bioText: "Welcome to the Stanford Online High School Student Profile. Emily Zhang is an enrolled scholar completing synchronous virtual seminars and interdisciplinary honors research for the 2025-2026 academic cycle.",
    docHeading: "Academic & Enrollment Documentation:",
    docs: [
      { id: 1, name: "Stanford OHS Student Enrollment Certificate 2025-26.pdf" },
      { id: 2, name: "Official Academic Transcript - Fall 2025.pdf" },
      { id: 3, name: "Stanford OHS Student ID Card - Zhang.pdf" }
    ],
    footerAddress: "Stanford Online High School\n415 Broadway, Stanford, CA 94305\n(650) 723-2300",
    footerCopyright: "© 2026 Stanford University\nAll Rights Reserved. Excellence in Education"
  },
  custom_school: {
    securityText: "Connection Secure",
    browserUrl: "https://www.ocps.net/staff/directory/educator",
    brandMain: "OCPS",
    brandTag: "Public Schools",
    portalTitle: "Staff & Educator Portal 2025-2026",
    accentColor: "#004b87",
    facultyName: "Robert Carter",
    facultyInitials: "RC",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Department of Curriculum & Advanced Academics",
    statusBadgeText: "ACTIVE FACULTY",
    statusBadgeColor: "green",
    officeAddress: "445 W Amelia St\nOrlando, FL 32801\n(407) 317-3200",
    corporateId: "OCPS-EMP-2026-9041",
    email: "rcarter@ocps.net",
    meta1Label: "CURRENT TERM",
    meta1Value: "2025 - 2026 Academic Year",
    meta2Label: "ORGANIZATION",
    meta2Value: "Orange County Public Schools (OCPS)",
    meta3Label: "LOCATION & NCES",
    meta3Value: "Orlando, Florida (NCES: 1201440)",
    meta4Label: "CREDENTIAL STATUS",
    meta4Value: "Full-Time Certified Faculty",
    bioText: "Welcome to the official educator staff directory profile. Supporting instructional excellence and comprehensive standards-based educational programs for the 2025-2026 academic year.",
    docHeading: "Faculty Documentation:",
    docs: [
      { id: 1, name: "Educator Employment Record 2025-26.pdf" },
      { id: 2, name: "Corporate Faculty ID - Staff Badge.pdf" },
      { id: 3, name: "Faculty Paystub & Earnings Statement 2025-26.pdf" }
    ],
    footerAddress: "Orange County Public Schools (OCPS)\n445 W Amelia St, Orlando, FL 32801\n(407) 317-3200",
    footerCopyright: "© 2026 Orange County Public Schools | Florida\nExcellence in Education"
  },
  hust: {
    country: "vn",
    securityText: "Kết Nối Bảo Mật (SSL)",
    browserUrl: "https://ctt.hust.edu.vn/giang-vien/nguyen-van-an",
    brandMain: "ĐẠI HỌC BÁCH KHOA",
    brandTag: "HÀ NỘI",
    portalTitle: "Cổng Thông Tin Cán Bộ - Giảng Viên 2025-2026",
    accentColor: "#b91c1c",
    facultyName: "PGS. TS. Nguyễn Văn An",
    facultyInitials: "NA",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Khoa Khoa Học Máy Tính & Trí Tuệ Nhân Tạo",
    statusBadgeText: "GIẢNG VIÊN CHÍNH THỨC",
    statusBadgeColor: "green",
    officeAddress: "Trường Đại học Bách Khoa Hà Nội\nSố 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội\nPhòng 402 - Nhà C1",
    corporateId: "HUST-CB-2026-8812",
    email: "an.nguyenvan@hust.edu.vn",
    meta1Label: "NĂM HỌC / HỌC KỲ",
    meta1Value: "Năm học 2025 - 2026 (Học kỳ 1)",
    meta2Label: "ĐƠN VỊ CÔNG TÁC",
    meta2Value: "Đại học Bách Khoa Hà Nội (HUST)",
    meta3Label: "ĐỊA ĐIỂM & MÃ TRƯỜNG",
    meta3Value: "Hà Nội, Việt Nam (Mã trường: BKA)",
    meta4Label: "TÌNH TRẠNG CÔNG TÁC",
    meta4Value: "Biên chế chính thức / Đang công tác",
    bioText: "Hồ sơ điện tử Cán bộ Giảng viên Đại học Bách Khoa Hà Nội. PGS. TS. Nguyễn Văn An phụ trách giảng dạy và nghiên cứu khoa học chuyên sâu về Học máy, Trí tuệ nhân tạo và Phân tích dữ liệu lớn niên khóa 2025-2026.",
    docHeading: "Hồ Sơ & Văn Bản Xác Nhận:",
    docs: [
      { id: 1, name: "Giay_Xac_Nhan_Cong_Tac_Giang_Vien_HUST_2025-26.pdf" },
      { id: 2, name: "The_Can_Bo_Giang_Vien_HUST_AnNV.pdf" },
      { id: 3, name: "Bang_Luong_Va_Phu_Cap_Giang_Vien_Thang10_2026.pdf" }
    ],
    footerAddress: "Đại học Bách Khoa Hà Nội (Hanoi University of Science and Technology)\nSố 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội\nĐiện thoại: (024) 3869 4242",
    footerCopyright: "© 2026 Đại học Bách Khoa Hà Nội | HUST\nKhởi nghiệp sáng tạo - Tiên phong dẫn dắt giáo dục đại học"
  },
  hcmut: {
    country: "vn",
    securityText: "Kết Nối Bảo Mật (SSL)",
    browserUrl: "https://portal.hcmut.edu.vn/staff/faculty/tran-thi-mai",
    brandMain: "ĐH BÁCH KHOA",
    brandTag: "ĐHQG-HCM",
    portalTitle: "Cổng Cán Bộ & Giảng Viên 2025-2026",
    accentColor: "#00477e",
    facultyName: "TS. Trần Thị Mai",
    facultyInitials: "TM",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Khoa Kỹ Thuật Hóa Học & Môi Trường",
    statusBadgeText: "GIẢNG VIÊN CHÍNH THỨC",
    statusBadgeColor: "green",
    officeAddress: "Trường Đại học Bách Khoa - ĐHQG TP.HCM\n268 Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM\nPhòng Tổ chức - Cán bộ",
    corporateId: "HCMUT-CB-2026-6419",
    email: "mai.tranthi@hcmut.edu.vn",
    meta1Label: "NIÊN KHÓA",
    meta1Value: "Năm học 2025 - 2026",
    meta2Label: "CƠ QUAN / ĐƠN VỊ",
    meta2Value: "Trường ĐH Bách Khoa - ĐHQG TP.HCM",
    meta3Label: "MÃ CƠ SỞ ĐÀO TẠO",
    meta3Value: "TP. Hồ Chí Minh (Mã trường: QSB)",
    meta4Label: "TRẠNG THÁI HỒ SƠ",
    meta4Value: "Đang công tác / Giảng viên cơ hữu",
    bioText: "Hồ sơ giảng viên Đại học Bách Khoa - Đại học Quốc gia TP.HCM. TS. Trần Thị Mai phụ trách công tác đào tạo chuyên môn và nghiên cứu chuyển giao công nghệ cho học kỳ 2025-2026.",
    docHeading: "Hồ Sơ Cán Bộ Giảng Viên:",
    docs: [
      { id: 1, name: "Giay_Xac_Nhan_Cong_Tac_Giang_Vien_HCMUT_2025-26.pdf" },
      { id: 2, name: "The_Can_Bo_Giang_Vien_BK_TPHCM.pdf" },
      { id: 3, name: "Bang_Luong_Va_Phu_Cap_Giang_Vien_Thang10_2026.pdf" }
    ],
    footerAddress: "Trường Đại học Bách Khoa - Đại học Quốc gia TP.HCM\n268 Lý Thường Kiệt, Quận 10, TP. Hồ Chí Minh\nĐiện thoại: (028) 3865 1670",
    footerCopyright: "© 2026 Trường ĐH Bách Khoa - ĐHQG TP.HCM\nTrung tâm đào tạo kỹ thuật công nghệ hàng đầu Việt Nam"
  },
  ueh: {
    country: "vn",
    securityText: "Kết Nối Bảo Mật (SSL)",
    browserUrl: "https://hrm.ueh.edu.vn/faculty/le-hoang-nam",
    brandMain: "ĐẠI HỌC KINH TẾ",
    brandTag: "TP.HCM (UEH)",
    portalTitle: "Cổng Nhân Sự & Giảng Viên 2025-2026",
    accentColor: "#0284c7",
    facultyName: "ThS. Lê Hoàng Nam",
    facultyInitials: "LN",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Khoa Tài Chính - Ngân Hàng & Fintech",
    statusBadgeText: "GIẢNG VIÊN CƠ HỮU",
    statusBadgeColor: "blue",
    officeAddress: "Đại học Kinh tế TP. Hồ Chí Minh (UEH)\n59C Nguyễn Đình Chiểu, Phường Võ Thị Sáu, Quận 3, TP.HCM",
    corporateId: "UEH-GV-2026-3180",
    email: "namlh@ueh.edu.vn",
    meta1Label: "NĂM HỌC",
    meta1Value: "2025 - 2026 Academic Year",
    meta2Label: "CƠ QUAN CHỦ QUẢN",
    meta2Value: "Đại học Kinh tế TP. Hồ Chí Minh (UEH)",
    meta3Label: "ĐỊA ĐIỂM",
    meta3Value: "TP. Hồ Chí Minh (Mã trường: KSA)",
    meta4Label: "CHỨC DANH",
    meta4Value: "Giảng viên cơ hữu / Thạc sĩ",
    bioText: "Cổng thông tin hồ sơ cán bộ Đại học Kinh tế TP. Hồ Chí Minh. ThS. Lê Hoàng Nam phụ trách giảng dạy các học phần Tài chính số, Ngân hàng thương mại và Phân tích tài chính doanh nghiệp niên khóa 2025-2026.",
    docHeading: "Văn Bản & Tài Liệu Xác Nhận:",
    docs: [
      { id: 1, name: "Giay_Xac_Nhan_Cong_Tac_Giang_Vien_UEH_2025-26.pdf" },
      { id: 2, name: "The_Can_Bo_Giang_Vien_UEH_NamLH.pdf" },
      { id: 3, name: "Bang_Luong_Va_Phu_Cap_Giang_Vien_Thang10_2026.pdf" }
    ],
    footerAddress: "Đại học Kinh tế TP. Hồ Chí Minh (UEH)\n59C Nguyễn Đình Chiểu, Quận 3, TP. Hồ Chí Minh\nĐiện thoại: (028) 3829 5299",
    footerCopyright: "© 2026 Đại học Kinh tế TP. Hồ Chí Minh | UEH University\nĐại học đa ngành và bền vững"
  },
  amsterdam: {
    country: "vn",
    securityText: "Kết Nối Bảo Mật (SSL)",
    browserUrl: "https://amsterdam.edu.vn/giao-vien/vu-dinh-hai",
    brandMain: "CHUYÊN HÀ NỘI",
    brandTag: "AMSTERDAM",
    portalTitle: "Cổng Giáo Viên & Cán Bộ 2025-2026",
    accentColor: "#1d4ed8",
    facultyName: "ThS. Vũ Đình Hải",
    facultyInitials: "VH",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Tổ Chuyên Môn Toán - Tin Học & Bồi Dưỡng Đội Tuyển",
    statusBadgeText: "GIÁO VIÊN CHÍNH THỨC",
    statusBadgeColor: "green",
    officeAddress: "Trường THPT Chuyên Hà Nội - Amsterdam\nSố 1 Hoàng Minh Giám, Cầu Giấy, Hà Nội\nVăn phòng Tổ Toán - Tin",
    corporateId: "AMS-GV-2026-1049",
    email: "haivd@amsterdam.edu.vn",
    meta1Label: "NIÊN KHÓA",
    meta1Value: "Năm học 2025 - 2026",
    meta2Label: "ĐƠN VỊ TRƯỜNG",
    meta2Value: "Trường THPT Chuyên Hà Nội - Amsterdam",
    meta3Label: "ĐỊA BÀN",
    meta3Value: "Hà Nội, Việt Nam",
    meta4Label: "HỢP ĐỒNG",
    meta4Value: "Giáo viên biên chế chính thức",
    bioText: "Cổng thông tin nhân sự giáo viên Trường THPT Chuyên Hà Nội - Amsterdam. ThS. Vũ Đình Hải phụ trách giảng dạy các lớp Chuyên Tin, bồi dưỡng học sinh giỏi quốc gia và dự án sáng tạo thanh thiếu niên niên khóa 2025-2026.",
    docHeading: "Hồ Sơ Giáo Viên & Công Tác:",
    docs: [
      { id: 1, name: "Giay_Xac_Nhan_Cong_Tac_Giao_Vien_Amsterdam_2025-26.pdf" },
      { id: 2, name: "The_Giao_Vien_Truong_Chuyen_HN_Amsterdam.pdf" },
      { id: 3, name: "Bang_Luong_Va_Phu_Cap_Giao_Vien_Thang10_2026.pdf" }
    ],
    footerAddress: "Trường THPT Chuyên Hà Nội - Amsterdam\nSố 1 Hoàng Minh Giám, Quận Cầu Giấy, Hà Nội\nĐiện thoại: (024) 3846 3096",
    footerCopyright: "© 2026 Trường THPT Chuyên Hà Nội - Amsterdam\nNgôi trường ươm mầm tài năng đất nước"
  },
  hust_student: {
    country: "vn",
    securityText: "Kết Nối Bảo Mật (SSL)",
    browserUrl: "https://ctt-daotao.hust.edu.vn/sinh-vien/dang-quoc-huy",
    brandMain: "ĐẠI HỌC BÁCH KHOA",
    brandTag: "HÀ NỘI",
    portalTitle: "Cổng Thông Tin Sinh Viên 2025-2026",
    accentColor: "#b91c1c",
    facultyName: "Đặng Quốc Huy",
    facultyInitials: "DH",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Viện Công Nghệ Thông Tin & Truyền Thông (K68 - IT1)",
    statusBadgeText: "SINH VIÊN CHÍNH QUY",
    statusBadgeColor: "green",
    officeAddress: "Đại học Bách Khoa Hà Nội\nSố 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội\nKý túc xá Bách Khoa - Nhà B5",
    corporateId: "MSSV: 20262841",
    email: "huy.dq262841@sis.hust.edu.vn",
    meta1Label: "HỌC KỲ HIỆN TẠI",
    meta1Value: "Học kỳ 1 - Năm học 2025-2026",
    meta2Label: "TRƯỜNG ĐÀO TẠO",
    meta2Value: "Đại học Bách Khoa Hà Nội",
    meta3Label: "KHÓA HỌC & NGÀNH",
    meta3Value: "Khoa học Máy tính (IT1 - K68)",
    meta4Label: "TÌNH TRẠNG HỌC TẬP",
    meta4Value: "Đang theo học / Sinh viên chính quy",
    bioText: "Cổng quản lý đào tạo sinh viên Đại học Bách Khoa Hà Nội. Đặng Quốc Huy hiện là sinh viên chính quy thuộc Viện Công nghệ Thông tin và Truyền thông, đang tích lũy tín chỉ học tập cho niên khóa 2025-2026.",
    docHeading: "Hồ Sơ & Xác Nhận Sinh Viên:",
    docs: [
      { id: 1, name: "Giay_Xac_Nhan_Sinh_Vien_Dang_Theo_Hoc_HUST_2025-26.pdf" },
      { id: 2, name: "The_Sinh_Vien_Chinh_Quy_HUST.pdf" },
      { id: 3, name: "Bang_Diem_Ket_Qua_Hoc_Tap_2025-2026.pdf" }
    ],
    footerAddress: "Đại học Bách Khoa Hà Nội - Phòng Quản lý Đào tạo\nSố 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội\n(024) 3869 4242",
    footerCopyright: "© 2026 Đại học Bách Khoa Hà Nội | Hệ thống CTT Đào tạo Sinh viên"
  },
  lehongphong_student: {
    country: "vn",
    securityText: "Kết Nối Bảo Mật (SSL)",
    browserUrl: "https://thpt-lehongphong-tphcm.edu.vn/hoc-sinh/nguyen-thuy-linh",
    brandMain: "CHUYÊN LÊ HỒNG PHONG",
    brandTag: "TP.HCM",
    portalTitle: "Cổng Thông Tin Học Sinh 2025-2026",
    accentColor: "#0d5257",
    facultyName: "Nguyễn Thùy Linh",
    facultyInitials: "NL",
    avatarType: "initials",
    avatarImageUrl: "",
    facultySubtitle: "Lớp 11 Chuyên Anh 1 • Niên Khóa 2024-2027",
    statusBadgeText: "HỌC SINH ĐANG HỌC",
    statusBadgeColor: "blue",
    officeAddress: "Trường THPT Chuyên Lê Hồng Phong TP.HCM\n235 Nguyễn Văn Cừ, Phường 4, Quận 5, TP.HCM",
    corporateId: "MSHS: LHP-2026-5120",
    email: "thuylinh.lhp@gmail.com",
    meta1Label: "NĂM HỌC HIỆN TẠI",
    meta1Value: "Năm học 2025 - 2026",
    meta2Label: "TRƯỜNG HỌC",
    meta2Value: "Trường THPT Chuyên Lê Hồng Phong TP.HCM",
    meta3Label: "KHỐI LỚP",
    meta3Value: "Khối 11 - Lớp Chuyên Anh 1",
    meta4Label: "HẠNH KIỂM & HỌC LỰC",
    meta4Value: "Học sinh Giỏi / Hạnh kiểm Tốt",
    bioText: "Cổng thông tin học sinh Trường THPT Chuyên Lê Hồng Phong TP.HCM. Học sinh Nguyễn Thùy Linh hiện đang theo học lớp 11 Chuyên Anh 1, đạt thành tích học tập xuất sắc niên khóa 2025-2026.",
    docHeading: "Hồ Sơ Xác Nhận Học Sinh:",
    docs: [
      { id: 1, name: "Giay_Xac_Nhan_Hoc_Sinh_THPT_LeHongPhong_2025-26.pdf" },
      { id: 2, name: "The_Hoc_Sinh_LHP_NguyenThuyLinh.pdf" },
      { id: 3, name: "So_Diem_Ket_Qua_Hoc_Tap_HocKy1_2025-26.pdf" }
    ],
    footerAddress: "Trường THPT Chuyên Lê Hồng Phong TP. Hồ Chí Minh\n235 Nguyễn Văn Cừ, Quận 5, TP.HCM\nĐiện thoại: (028) 3839 8506",
    footerCopyright: "© 2026 Trường THPT Chuyên Lê Hồng Phong TP.HCM\nTruyền thống yêu nước - Hiếu học - Dạy tốt - Học tốt"
  }
};

let state = JSON.parse(JSON.stringify(defaultState));
let currentZoom = 0.65; // initial scale to comfortably view full 1360px screenshot

// Elements references
const elements = {
  // Preview Elements
  targetSecurity: document.getElementById("pv-security"),
  targetUrl: document.getElementById("pv-url"),
  targetBrandMain: document.getElementById("pv-brand-main"),
  targetBrandTag: document.getElementById("pv-brand-tag"),
  targetPortalTitle: document.getElementById("pv-portal-title"),
  targetHeaderDivider: document.getElementById("pv-header-divider"),
  
  targetAvatarCircle: document.getElementById("pv-avatar-circle"),
  targetAvatarImg: document.getElementById("pv-avatar-img"),
  targetNameLeft: document.getElementById("pv-name-left"),
  targetStatusBadge: document.getElementById("pv-status-badge"),
  targetOfficeAddress: document.getElementById("pv-address"),
  targetCorpId: document.getElementById("pv-corp-id"),
  targetEmail: document.getElementById("pv-email"),

  targetNameRight: document.getElementById("pv-name-right"),
  targetSubtitle: document.getElementById("pv-subtitle"),
  
  targetMeta1Label: document.getElementById("pv-meta1-label"),
  targetMeta1Val: document.getElementById("pv-meta1-val"),
  targetMeta2Label: document.getElementById("pv-meta2-label"),
  targetMeta2Val: document.getElementById("pv-meta2-val"),
  targetMeta3Label: document.getElementById("pv-meta3-label"),
  targetMeta3Val: document.getElementById("pv-meta3-val"),
  targetMeta4Label: document.getElementById("pv-meta4-label"),
  targetMeta4Val: document.getElementById("pv-meta4-val"),

  targetBio: document.getElementById("pv-bio"),
  targetDocHeading: document.getElementById("pv-doc-heading"),
  targetDocList: document.getElementById("pv-doc-list"),

  targetFooterAddress: document.getElementById("pv-footer-address"),
  targetFooterCopyright: document.getElementById("pv-footer-copyright"),

  // Form Inputs
  inpCountryRegion: document.getElementById("inp-country-region"),
  inpUserRole: document.getElementById("inp-user-role"),
  inpBrowserTheme: document.getElementById("inp-browser-theme"),
  inpPreset: document.getElementById("inp-preset"),
  inpSecurityText: document.getElementById("inp-security-text"),
  inpBrowserUrl: document.getElementById("inp-browser-url"),
  inpBrandMain: document.getElementById("inp-brand-main"),
  inpBrandTag: document.getElementById("inp-brand-tag"),
  inpSchoolLogo: document.getElementById("inp-school-logo"),
  btnRemoveSchoolLogo: document.getElementById("btn-remove-school-logo"),
  pvBrandLogoImg: document.getElementById("pv-brand-logo-img"),
  chromeCustomFavicon: document.getElementById("chrome-custom-favicon"),
  chromeDefaultFavicon: document.getElementById("chrome-default-favicon"),
  docLtCustomLogo: document.getElementById("doc-lt-custom-logo"),
  docLtDefaultLogo: document.getElementById("doc-lt-default-logo"),
  docPsCustomLogo: document.getElementById("doc-ps-custom-logo"),
  inpPortalTitle: document.getElementById("inp-portal-title"),
  inpAccentColor: document.getElementById("inp-accent-color"),
  pvBrowserChrome: document.getElementById("pv-browser-chrome"),
  chromeTabTitle: document.getElementById("chrome-tab-title"),

  // Custom School Setup Inputs
  inpCsFullname: document.getElementById("inp-cs-fullname"),
  inpCsBrand: document.getElementById("inp-cs-brand"),
  inpCsTag: document.getElementById("inp-cs-tag"),
  inpCsDomain: document.getElementById("inp-cs-domain"),
  inpCsNces: document.getElementById("inp-cs-nces"),
  inpCsEin: document.getElementById("inp-cs-ein"),
  inpCsErp: document.getElementById("inp-cs-erp"),
  inpCsAddress: document.getElementById("inp-cs-address"),
  btnApplyCustomSchool: document.getElementById("btn-apply-custom-school"),

  inpFacultyName: document.getElementById("inp-faculty-name"),
  inpFacultyInitials: document.getElementById("inp-faculty-initials"),
  inpAvatarPhoto: document.getElementById("inp-avatar-photo"),
  btnRemovePhoto: document.getElementById("btn-remove-photo"),
  inpFacultySubtitle: document.getElementById("inp-faculty-subtitle"),
  inpStatusBadgeText: document.getElementById("inp-status-badge-text"),
  inpStatusBadgeColor: document.getElementById("inp-status-badge-color"),
  inpOfficeAddress: document.getElementById("inp-office-address"),
  inpCorpId: document.getElementById("inp-corp-id"),
  inpEmail: document.getElementById("inp-email"),

  inpMeta1Label: document.getElementById("inp-meta1-label"),
  inpMeta1Val: document.getElementById("inp-meta1-val"),
  inpMeta2Label: document.getElementById("inp-meta2-label"),
  inpMeta2Val: document.getElementById("inp-meta2-val"),
  inpMeta3Label: document.getElementById("inp-meta3-label"),
  inpMeta3Val: document.getElementById("inp-meta3-val"),
  inpMeta4Label: document.getElementById("inp-meta4-label"),
  inpMeta4Val: document.getElementById("inp-meta4-val"),

  inpBioText: document.getElementById("inp-bio-text"),
  inpDocHeading: document.getElementById("inp-doc-heading"),
  docEditorContainer: document.getElementById("doc-editor-container"),
  btnAddDoc: document.getElementById("btn-add-doc"),

  inpFooterAddress: document.getElementById("inp-footer-address"),
  inpFooterCopyright: document.getElementById("inp-footer-copyright"),

  // Buttons & Controls
  previewWrapper: document.getElementById("preview-wrapper"),
  zoomIndicator: document.getElementById("zoom-val"),
  btnZoomIn: document.getElementById("btn-zoom-in"),
  btnZoomOut: document.getElementById("btn-zoom-out"),
  btnZoomFit: document.getElementById("btn-zoom-fit"),
  btnDownloadPng: document.getElementById("btn-download-png"),
  btnDownloadPdf: document.getElementById("btn-download-pdf"),
  btnDownloadZip: document.getElementById("btn-download-zip"),
  btnOpenDocStudio: document.getElementById("btn-open-doc-studio"),
  btnCopyImage: document.getElementById("btn-copy-image"),
  btnReset: document.getElementById("btn-reset"),
  toast: document.getElementById("toast"),

  // Document Studio Elements
  docStudioModal: document.getElementById("doc-studio-modal"),
  btnCloseModal: document.getElementById("btn-close-modal"),
  btnDocDownloadPdf: document.getElementById("btn-doc-download-pdf"),
  btnDocDownloadPng: document.getElementById("btn-doc-download-png"),
  inpDocSaveName: document.getElementById("inp-doc-save-name"),

  // Tab views
  docTargetLetter: document.getElementById("doc-target-letter"),
  docTargetIdcard: document.getElementById("doc-target-idcard"),
  docTargetCredential: document.getElementById("doc-target-credential"),
  docTargetPaystub: document.getElementById("doc-target-paystub"),

  // Tab controls
  ctrlTabLetter: document.getElementById("controls-tab-letter"),
  ctrlTabIdcard: document.getElementById("controls-tab-idcard"),
  ctrlTabCredential: document.getElementById("controls-tab-credential"),
  ctrlTabPaystub: document.getElementById("controls-tab-paystub"),

  // Paystub inputs
  inpPayPeriod: document.getElementById("inp-pay-period"),
  inpPayDate: document.getElementById("inp-pay-date"),
  inpPayAdviceNo: document.getElementById("inp-pay-advice-no"),
  inpPayGross: document.getElementById("inp-pay-gross"),
  inpPayNet: document.getElementById("inp-pay-net"),

  // Desk Mode
  chkDeskMode: document.getElementById("chk-desk-mode"),

  // Profile Manager
  btnRandomProfile: document.getElementById("btn-random-profile"),
  btnSaveProfile: document.getElementById("btn-save-profile"),
  selSavedProfiles: document.getElementById("sel-saved-profiles"),
  savedProfilesWrapper: document.getElementById("saved-profiles-wrapper"),

  // Letter inputs
  inpLetterDate: document.getElementById("inp-letter-date"),
  inpLetterRef: document.getElementById("inp-letter-ref"),
  inpLetterHireDate: document.getElementById("inp-letter-hire-date"),
  inpLetterSalary: document.getElementById("inp-letter-salary"),
  inpLetterSignerName: document.getElementById("inp-letter-signer-name"),
  inpLetterSignerTitle: document.getElementById("inp-letter-signer-title"),

  // ID Card inputs
  inpIdcardExp: document.getElementById("inp-idcard-exp"),
  inpIdcardSecCode: document.getElementById("inp-idcard-sec-code"),
  inpIdcardBadgeLabel: document.getElementById("inp-idcard-badge-label"),

  // Credential inputs
  inpCredIssuer: document.getElementById("inp-cred-issuer"),
  inpCredType: document.getElementById("inp-cred-type"),
  inpCredDocNo: document.getElementById("inp-cred-doc-no"),
  inpCredValidity: document.getElementById("inp-cred-validity"),

  // Signature customization elements
  inpSigInkColor: document.getElementById("inp-sig-ink-color"),
  inpSigUpload: document.getElementById("inp-sig-upload"),
  btnRemoveCustomSig: document.getElementById("btn-remove-custom-sig"),
  btnOpenPad: document.getElementById("btn-open-pad"),
  sigPadModal: document.getElementById("sig-pad-modal"),
  btnCloseSigPad: document.getElementById("btn-close-sig-pad"),
  btnCancelSigPad: document.getElementById("btn-cancel-sig-pad"),
  btnClearSigPad: document.getElementById("btn-clear-sig-pad"),
  btnApplySigPad: document.getElementById("btn-apply-sig-pad"),
  sigCanvas: document.getElementById("sig-canvas")
};

// Render form fields with current state values
function populateFormFromState() {
  elements.inpSecurityText.value = state.securityText;
  elements.inpBrowserUrl.value = state.browserUrl;
  elements.inpBrandMain.value = state.brandMain;
  elements.inpBrandTag.value = state.brandTag;
  elements.inpPortalTitle.value = state.portalTitle;
  elements.inpAccentColor.value = state.accentColor;

  elements.inpFacultyName.value = state.facultyName;
  elements.inpFacultyInitials.value = state.facultyInitials;
  elements.inpFacultySubtitle.value = state.facultySubtitle;
  elements.inpStatusBadgeText.value = state.statusBadgeText;
  elements.inpStatusBadgeColor.value = state.statusBadgeColor;
  elements.inpOfficeAddress.value = state.officeAddress;
  elements.inpCorpId.value = state.corporateId;
  elements.inpEmail.value = state.email;

  elements.inpMeta1Label.value = state.meta1Label;
  elements.inpMeta1Val.value = state.meta1Value;
  elements.inpMeta2Label.value = state.meta2Label;
  elements.inpMeta2Val.value = state.meta2Value;
  elements.inpMeta3Label.value = state.meta3Label;
  elements.inpMeta3Val.value = state.meta3Value;
  elements.inpMeta4Label.value = state.meta4Label;
  elements.inpMeta4Val.value = state.meta4Value;

  elements.inpBioText.value = state.bioText;
  elements.inpDocHeading.value = state.docHeading;

  elements.inpFooterAddress.value = state.footerAddress;
  elements.inpFooterCopyright.value = state.footerCopyright;

  renderDocEditorList();
}

// Render dynamic document list in Editor
function renderDocEditorList() {
  elements.docEditorContainer.innerHTML = "";
  state.docs.forEach((doc, index) => {
    const row = document.createElement("div");
    row.className = "doc-item-row";
    row.innerHTML = `
      <input type="text" value="${escapeHtml(doc.name)}" data-doc-index="${index}" class="doc-name-input" placeholder="Tên tệp (.pdf)">
      <button type="button" class="btn-icon-del" data-doc-del="${index}" title="Xóa tài liệu">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    `;
    elements.docEditorContainer.appendChild(row);
  });

  // Attach delete handlers
  elements.docEditorContainer.querySelectorAll("[data-doc-del]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(e.currentTarget.getAttribute("data-doc-del"));
      state.docs.splice(idx, 1);
      renderDocEditorList();
      updatePreview();
    });
  });

  // Attach edit handlers
  elements.docEditorContainer.querySelectorAll(".doc-name-input").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const idx = parseInt(e.target.getAttribute("data-doc-index"));
      state.docs[idx].name = e.target.value;
      updatePreview();
    });
  });
}

// Compute initials automatically from name
function computeInitials(name) {
  if (!name) return "";
  const parts = name.trim().replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.)\s+/i, '').split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Update the Preview DOM
function updatePreview() {
  // Update accent color variables
  document.documentElement.style.setProperty("--primary-color", state.accentColor);

  // Chrome
  elements.targetSecurity.textContent = state.securityText;
  elements.targetUrl.textContent = state.browserUrl;

  // Header
  elements.targetBrandMain.textContent = state.brandMain;
  elements.targetBrandTag.textContent = state.brandTag;
  elements.targetPortalTitle.textContent = state.portalTitle;

  // Custom School Logo
  if (state.schoolLogoUrl) {
    if (elements.pvBrandLogoImg) {
      elements.pvBrandLogoImg.src = state.schoolLogoUrl;
      elements.pvBrandLogoImg.style.display = "block";
    }
    if (elements.btnRemoveSchoolLogo) elements.btnRemoveSchoolLogo.style.display = "inline-block";
    if (elements.chromeCustomFavicon) {
      elements.chromeCustomFavicon.src = state.schoolLogoUrl;
      elements.chromeCustomFavicon.style.display = "block";
    }
    if (elements.chromeDefaultFavicon) elements.chromeDefaultFavicon.style.display = "none";
    if (elements.docLtCustomLogo) {
      elements.docLtCustomLogo.src = state.schoolLogoUrl;
      elements.docLtCustomLogo.style.display = "block";
    }
    if (elements.docLtDefaultLogo) elements.docLtDefaultLogo.style.display = "none";
    if (elements.docPsCustomLogo) {
      elements.docPsCustomLogo.src = state.schoolLogoUrl;
      elements.docPsCustomLogo.style.display = "block";
    }
  } else {
    if (elements.pvBrandLogoImg) {
      elements.pvBrandLogoImg.style.display = "none";
      elements.pvBrandLogoImg.src = "";
    }
    if (elements.btnRemoveSchoolLogo) elements.btnRemoveSchoolLogo.style.display = "none";
    if (elements.chromeCustomFavicon) {
      elements.chromeCustomFavicon.style.display = "none";
      elements.chromeCustomFavicon.src = "";
    }
    if (elements.chromeDefaultFavicon) elements.chromeDefaultFavicon.style.display = "block";
    if (elements.docLtCustomLogo) {
      elements.docLtCustomLogo.style.display = "none";
      elements.docLtCustomLogo.src = "";
    }
    if (elements.docLtDefaultLogo) elements.docLtDefaultLogo.style.display = "block";
    if (elements.docPsCustomLogo) {
      elements.docPsCustomLogo.style.display = "none";
      elements.docPsCustomLogo.src = "";
    }
  }

  // Avatar & Left Profile
  if (state.avatarType === "image" && state.avatarImageUrl) {
    elements.targetAvatarCircle.style.display = "none";
    elements.targetAvatarImg.style.display = "block";
    elements.targetAvatarImg.src = state.avatarImageUrl;
    elements.btnRemovePhoto.style.display = "inline-flex";
  } else {
    elements.targetAvatarCircle.style.display = "flex";
    elements.targetAvatarImg.style.display = "none";
    elements.targetAvatarCircle.textContent = state.facultyInitials || computeInitials(state.facultyName);
    elements.btnRemovePhoto.style.display = "none";
  }

  elements.targetNameLeft.textContent = state.facultyName;
  elements.targetStatusBadge.textContent = state.statusBadgeText;

  // Status Badge Colors
  const badgeStyles = {
    green: { bg: "#def7ec", color: "#03543f" },
    blue: { bg: "#e0f2fe", color: "#0369a1" },
    orange: { bg: "#ffedd5", color: "#c2410c" },
    purple: { bg: "#f3e8ff", color: "#7e22ce" }
  };
  const badgeStyle = badgeStyles[state.statusBadgeColor] || badgeStyles.green;
  elements.targetStatusBadge.style.backgroundColor = badgeStyle.bg;
  elements.targetStatusBadge.style.color = badgeStyle.color;

  elements.targetOfficeAddress.textContent = state.officeAddress;
  elements.targetCorpId.textContent = state.corporateId;
  elements.targetEmail.textContent = state.email;

  // Right Side Details
  elements.targetNameRight.textContent = state.facultyName;
  elements.targetSubtitle.textContent = state.facultySubtitle;

  elements.targetMeta1Label.textContent = state.meta1Label;
  elements.targetMeta1Val.textContent = state.meta1Value;
  elements.targetMeta2Label.textContent = state.meta2Label;
  elements.targetMeta2Val.textContent = state.meta2Value;
  elements.targetMeta3Label.textContent = state.meta3Label;
  elements.targetMeta3Val.textContent = state.meta3Value;
  elements.targetMeta4Label.textContent = state.meta4Label;
  elements.targetMeta4Val.textContent = state.meta4Value;

  elements.targetBio.textContent = state.bioText;
  elements.targetDocHeading.textContent = state.docHeading;

  // Render Preview Documents
  elements.targetDocList.innerHTML = "";
  state.docs.forEach((doc, idx) => {
    const item = document.createElement("div");
    item.className = "doc-card-item";
    
    // determine matching document type
    const lower = doc.name.toLowerCase();
    let docType = "letter";
    if (lower.includes("id") || lower.includes("badge") || lower.includes("card")) {
      docType = "idcard";
    } else if (lower.includes("paystub") || lower.includes("salary") || lower.includes("earning") || lower.includes("statement")) {
      docType = "paystub";
    } else if (lower.includes("guide") || lower.includes("curriculum") || lower.includes("credential") || lower.includes("certificate")) {
      docType = "credential";
    }

    item.setAttribute("data-doc-type", docType);
    item.innerHTML = `
      <div class="doc-card-left">
        <div class="doc-icon-badge" style="background-color: ${state.accentColor};">
          <svg class="doc-icon-svg" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8" fill="none" stroke="#ffffff" stroke-width="2"></polyline>
            <line x1="16" y1="13" x2="8" y2="13" stroke="#ffffff" stroke-width="2"></line>
            <line x1="16" y1="17" x2="8" y2="17" stroke="#ffffff" stroke-width="2"></line>
            <polyline points="10 9 9 9 8 9" stroke="#ffffff" stroke-width="2"></polyline>
          </svg>
        </div>
        <span class="doc-name-text">${escapeHtml(doc.name)}</span>
      </div>
      <span class="doc-action-badge">Mở xem & Tải PDF →</span>
    `;

    item.addEventListener("click", () => {
      openDocStudio(docType);
    });

    elements.targetDocList.appendChild(item);
  });

  // Footer
  elements.targetFooterAddress.innerHTML = escapeHtml(state.footerAddress).replace(/\n/g, "<br>");
  elements.targetFooterCopyright.innerHTML = escapeHtml(state.footerCopyright).replace(/\n/g, "<br>");
}

// Utility: HTML escape
function escapeHtml(text) {
  if (!text) return "";
  return text.replace(/[&<>"']/g, function(m) {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#039;';
      default: return m;
    }
  });
}

// Apply Zoom
function applyZoom(zoom) {
  currentZoom = Math.min(Math.max(zoom, 0.3), 1.2);
  elements.previewWrapper.style.transform = `scale(${currentZoom})`;
  elements.zoomIndicator.textContent = `${Math.round(currentZoom * 100)}%`;
}

// Show Toast
function showToast(msg) {
  elements.toast.textContent = msg;
  elements.toast.classList.add("show");
  setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2800);
}

// Setup Event Listeners
function setupListeners() {
  // Preset selector
  elements.inpPreset.addEventListener("change", (e) => {
    const val = e.target.value;
    if (presets[val]) {
      state = JSON.parse(JSON.stringify(presets[val]));
      if (elements.inpUserRole) {
        elements.inpUserRole.value = val.includes("student") ? "student" : "faculty";
      }
      populateFormFromState();
      updatePreview();
      const presetNames = {
        stride: 'Stride K12 Gốc',
        fcps: 'Fairfax County Public Schools (FCPS), VA - Top #1',
        lausd: 'Los Angeles Unified School District (LAUSD), CA - Top #2',
        ccsd: 'Clark County School District (CCSD - Las Vegas), NV',
        mdcps: 'Miami-Dade County Public Schools (M-DCPS), FL',
        hisd: 'Houston Independent School District (HISD), TX',
        connections: 'Connections Academy (Pearson K-12)',
        demille: 'Cecil B. DeMille My Viet Academy',
        stanford: 'Stanford OHS',
        mit: 'MIT Open Learning',
        hust: 'Đại học Bách Khoa Hà Nội (HUST) - Giảng viên',
        hcmut: 'ĐH Bách Khoa - ĐHQG TP.HCM (HCMUT)',
        ueh: 'Đại học Kinh tế TP.HCM (UEH)',
        amsterdam: 'THPT Chuyên Hà Nội - Amsterdam',
        hust_student: 'ĐH Bách Khoa Hà Nội (Sinh viên)',
        lehongphong_student: 'THPT Chuyên Lê Hồng Phong TP.HCM (Học sinh)',
        fcps_student: 'FCPS (Học sinh Alexander Davis - TJHSST)',
        demille_student: 'DeMille (Học sinh Tran Minh Quan)',
        stride_student: 'Stride K12 (Học sinh Lucas Anderson)',
        stanford_student: 'Stanford OHS (Học sinh Emily Zhang)',
        custom_school: '✨ Tự Nhập Trường Tùy Chọn Mới'
      };

      if (val === "custom_school") {
        const card = document.getElementById("card-custom-school");
        if (card) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }

      // Sync country region selector
      if (elements.inpCountryRegion) {
        elements.inpCountryRegion.value = (presets[val] && presets[val].country === "vn") ? "vn" : "us";
      }

      // Auto-refresh dates within SheerID 30-day window on preset switch
      const now = new Date();
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const currentMonth = monthNames[now.getMonth()];
      const currentDay = now.getDate();
      const currentYear = now.getFullYear();

      docStudioState.letterDate = `Date: ${currentMonth} ${currentDay}, ${currentYear}`;
      const payMonth = now.getMonth() + 1;
      const payDay = Math.max(1, currentDay - 4);
      docStudioState.payDate = `${String(payMonth).padStart(2, '0')}/${String(payDay).padStart(2, '0')}/${currentYear}`;
      docStudioState.payPeriod = `${String(payMonth).padStart(2, '0')}/01/${currentYear} - ${String(payMonth).padStart(2, '0')}/15/${currentYear}`;
      docStudioState.idcardExp = `EXP: 06/${currentYear + 1}`;

      showToast("Đã tải cấu hình: " + (presetNames[val] || val.toUpperCase()));
    }
  });

  // Country / Region Switcher (US <-> VN)
  if (elements.inpCountryRegion) {
    elements.inpCountryRegion.addEventListener("change", (e) => {
      const region = e.target.value;
      const targetPreset = region === "vn" ? "hust" : "fcps";
      if (presets[targetPreset]) {
        state = JSON.parse(JSON.stringify(presets[targetPreset]));
        if (elements.inpPreset) elements.inpPreset.value = targetPreset;
        if (elements.inpUserRole) elements.inpUserRole.value = "faculty";
        populateFormFromState();
        updatePreview();
        showToast(region === "vn" ? "🇻🇳 Đã chuyển sang Hệ thống Trường học Việt Nam" : "🇺🇸 Đã chuyển sang Hệ thống Giáo dục Hoa Kỳ & Quốc tế");
      }
    });
  }

  // User Role Switcher (Faculty <-> Student)
  if (elements.inpUserRole) {
    elements.inpUserRole.addEventListener("change", (e) => {
      const role = e.target.value;
      const targetPreset = role === "student" ? "demille_student" : "demille";
      if (presets[targetPreset]) {
        state = JSON.parse(JSON.stringify(presets[targetPreset]));
        elements.inpPreset.value = targetPreset;
        populateFormFromState();
        updatePreview();
        showToast("Đã chuyển sang chế độ: " + (role === "student" ? "🎓 Học sinh / Sinh viên" : "👨‍🏫 Giảng viên / Nhân sự"));
      }
    });
  }

  // Browser Theme Switcher
  if (elements.inpBrowserTheme) {
    elements.inpBrowserTheme.addEventListener("change", (e) => {
      const theme = e.target.value;
      if (elements.pvBrowserChrome) {
        elements.pvBrowserChrome.classList.toggle("safari-mode", theme === "safari");
        elements.pvBrowserChrome.classList.toggle("clean-mode", theme === "clean");
      }
      showToast("Đã đổi kiểu trình duyệt: " + theme.toUpperCase());
    });
  }

  // Apply Custom School Setup
  if (elements.btnApplyCustomSchool) {
    elements.btnApplyCustomSchool.addEventListener("click", () => {
      applyCustomSchoolData();
    });
  }

  // Live Sync Inputs
  const bindInput = (el, prop) => {
    el.addEventListener("input", (e) => {
      state[prop] = e.target.value;
      if (prop === "facultyName" && (!state.facultyInitials || state.facultyInitials === computeInitials(state.facultyName))) {
        state.facultyInitials = computeInitials(state.facultyName);
        elements.inpFacultyInitials.value = state.facultyInitials;
      }
      updatePreview();
    });
  };

  bindInput(elements.inpSecurityText, "securityText");
  bindInput(elements.inpBrowserUrl, "browserUrl");
  bindInput(elements.inpBrandMain, "brandMain");
  bindInput(elements.inpBrandTag, "brandTag");
  bindInput(elements.inpPortalTitle, "portalTitle");
  bindInput(elements.inpAccentColor, "accentColor");

  bindInput(elements.inpFacultyName, "facultyName");
  bindInput(elements.inpFacultyInitials, "facultyInitials");
  bindInput(elements.inpFacultySubtitle, "facultySubtitle");
  bindInput(elements.inpStatusBadgeText, "statusBadgeText");
  bindInput(elements.inpStatusBadgeColor, "statusBadgeColor");
  bindInput(elements.inpOfficeAddress, "officeAddress");
  bindInput(elements.inpCorpId, "corporateId");
  bindInput(elements.inpEmail, "email");

  bindInput(elements.inpMeta1Label, "meta1Label");
  bindInput(elements.inpMeta1Val, "meta1Value");
  bindInput(elements.inpMeta2Label, "meta2Label");
  bindInput(elements.inpMeta2Val, "meta2Value");
  bindInput(elements.inpMeta3Label, "meta3Label");
  bindInput(elements.inpMeta3Val, "meta3Value");
  bindInput(elements.inpMeta4Label, "meta4Label");
  bindInput(elements.inpMeta4Val, "meta4Value");

  bindInput(elements.inpBioText, "bioText");
  bindInput(elements.inpDocHeading, "docHeading");

  bindInput(elements.inpFooterAddress, "footerAddress");
  bindInput(elements.inpFooterCopyright, "footerCopyright");

  // Avatar file upload
  elements.inpAvatarPhoto.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        state.avatarType = "image";
        state.avatarImageUrl = event.target.result;
        updatePreview();
        showToast("Đã cập nhật ảnh đại diện!");
      };
      reader.readAsDataURL(file);
    }
  });

  // Remove photo button
  elements.btnRemovePhoto.addEventListener("click", () => {
    state.avatarType = "initials";
    state.avatarImageUrl = "";
    elements.inpAvatarPhoto.value = "";
    updatePreview();
    showToast("Đã chuyển về chữ viết tắt (Initials)");
  });

  // School Logo upload
  if (elements.inpSchoolLogo) {
    elements.inpSchoolLogo.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          state.schoolLogoUrl = event.target.result;
          updatePreview();
          showToast("✅ Đã tải logo trường thành công!");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Remove school logo button
  if (elements.btnRemoveSchoolLogo) {
    elements.btnRemoveSchoolLogo.addEventListener("click", () => {
      state.schoolLogoUrl = "";
      if (elements.inpSchoolLogo) elements.inpSchoolLogo.value = "";
      updatePreview();
      showToast("Đã xóa logo trường, sử dụng văn bản mặc định");
    });
  }

  // Add Document
  elements.btnAddDoc.addEventListener("click", () => {
    const newId = Date.now();
    state.docs.push({ id: newId, name: "New-Document-Verification.pdf" });
    renderDocEditorList();
    updatePreview();
  });

  // Zoom controls
  elements.btnZoomIn.addEventListener("click", () => applyZoom(currentZoom + 0.05));
  elements.btnZoomOut.addEventListener("click", () => applyZoom(currentZoom - 0.05));
  elements.btnZoomFit.addEventListener("click", () => {
    // calculate fit to available stage width
    const stageWidth = document.querySelector(".preview-stage").clientWidth - 60;
    const fitScale = stageWidth / 1360;
    applyZoom(fitScale);
  });

  // Reset button
  elements.btnReset.addEventListener("click", () => {
    if (confirm("Khôi phục toàn bộ thông tin về mặc định Stride K12?")) {
      state = JSON.parse(JSON.stringify(defaultState));
      elements.inpPreset.value = "stride";
      populateFormFromState();
      updatePreview();
      showToast("Đã khôi phục mặc định Stride K12!");
    }
  });

  // Export Screenshot (Download PNG)
  elements.btnDownloadPng.addEventListener("click", async () => {
    await generateScreenshot(false);
  });

  // Copy Screenshot to Clipboard
  elements.btnCopyImage.addEventListener("click", async () => {
    await generateScreenshot(true);
  });

  // Export Portal Screenshot as PDF
  elements.btnDownloadPdf.addEventListener("click", async () => {
    await downloadPortalPdf();
  });

  // Export Complete Bundle as 1 ZIP file
  if (elements.btnDownloadZip) {
    elements.btnDownloadZip.addEventListener("click", async () => {
      await downloadCompleteZipBundle();
    });
  }

  // Open Document Studio Modal
  elements.btnOpenDocStudio.addEventListener("click", () => {
    openDocStudio("letter");
  });

  // Close Document Studio Modal
  elements.btnCloseModal.addEventListener("click", () => {
    closeDocStudio();
  });

  // Click outside modal dialog to close
  elements.docStudioModal.addEventListener("click", (e) => {
    if (e.target === elements.docStudioModal) {
      closeDocStudio();
    }
  });

  // Tab switching in Document Studio
  document.querySelectorAll(".modal-tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const btnEl = e.target.closest(".modal-tab-btn") || btn;
      const tab = btnEl.getAttribute("data-tab");
      if (tab) switchDocTab(tab);
    });
  });

  // Document Studio Inputs Live Sync
  setupDocStudioInputs();

  // Export Document as PDF
  elements.btnDocDownloadPdf.addEventListener("click", async () => {
    await downloadDocPdf();
  });

  // Export Document as PNG
  elements.btnDocDownloadPng.addEventListener("click", async () => {
    await downloadDocPng();
  });

  // Window resize: auto fit if needed
  window.addEventListener("resize", () => {
    const stageWidth = document.querySelector(".preview-stage").clientWidth - 60;
    if (stageWidth > 0 && currentZoom * 1360 > stageWidth + 100) {
      applyZoom(stageWidth / 1360);
    }
  });
}

// ==========================================
// DOCUMENT STUDIO LOGIC
// ==========================================
let activeDocTab = "letter";
const docStudioState = {
  letterDate: "Date: November 11, 2026",
  letterRef: "REF: WSD-EMP-2025-94812",
  letterHireDate: "August 15, 2022",
  letterSalary: "$84,500.00 USD / Academic Year",
  letterSigner: "Dr. Eleanor Vance, Ph.D.",
  letterSignerRole: "Director of Human Resources & Academic Compliance",

  idcardExp: "EXP: 06/2026",
  idcardSecCode: "SEC-CODE: 4982-A",
  idcardBadgeLabel: "FACULTY / STAFF",

  credIssuer: "STATE COMMISSION ON TEACHER CREDENTIALING",
  credType: "Multiple Subject Teaching Credential • BCLAD Bilingual Authorization",
  credDocNo: "DOC # CA-CRED-882941",
  credValidity: "Valid Through: June 30, 2028",

  payPeriod: "10/01/2026 - 10/15/2026",
  payDate: "10/20/2026",
  payAdviceNo: "ADV-2026-89412",
  payGross: "$3,950.83",
  payNet: "$2,707.28"
};

function setupDocStudioInputs() {
  elements.inpLetterDate.value = docStudioState.letterDate;
  elements.inpLetterRef.value = docStudioState.letterRef;
  elements.inpLetterHireDate.value = docStudioState.letterHireDate;
  elements.inpLetterSalary.value = docStudioState.letterSalary;
  elements.inpLetterSignerName.value = docStudioState.letterSigner;
  elements.inpLetterSignerTitle.value = docStudioState.letterSignerRole;

  elements.inpIdcardExp.value = docStudioState.idcardExp;
  elements.inpIdcardSecCode.value = docStudioState.idcardSecCode;
  elements.inpIdcardBadgeLabel.value = docStudioState.idcardBadgeLabel;

  elements.inpCredIssuer.value = docStudioState.credIssuer;
  elements.inpCredType.value = docStudioState.credType;
  elements.inpCredDocNo.value = docStudioState.credDocNo;
  elements.inpCredValidity.value = docStudioState.credValidity;

  if (elements.inpPayPeriod) elements.inpPayPeriod.value = docStudioState.payPeriod;
  if (elements.inpPayDate) elements.inpPayDate.value = docStudioState.payDate;
  if (elements.inpPayAdviceNo) elements.inpPayAdviceNo.value = docStudioState.payAdviceNo;
  if (elements.inpPayGross) elements.inpPayGross.value = docStudioState.payGross;
  if (elements.inpPayNet) elements.inpPayNet.value = docStudioState.payNet;

  const bindDocInput = (el, prop, targetElId) => {
    if (!el) return;
    el.addEventListener("input", (e) => {
      docStudioState[prop] = e.target.value;
      const target = document.getElementById(targetElId);
      if (target) target.textContent = e.target.value;
    });
  };

  bindDocInput(elements.inpLetterDate, "letterDate", "doc-lt-date");
  bindDocInput(elements.inpLetterRef, "letterRef", "doc-lt-ref");
  bindDocInput(elements.inpLetterHireDate, "letterHireDate", "doc-lt-tbl-hire");
  bindDocInput(elements.inpLetterSalary, "letterSalary", "doc-lt-tbl-salary");
  bindDocInput(elements.inpLetterSignerName, "letterSigner", "doc-lt-signer");
  bindDocInput(elements.inpLetterSignerTitle, "letterSignerRole", "doc-lt-signer-role");

  bindDocInput(elements.inpIdcardExp, "idcardExp", "doc-ic-exp");
  bindDocInput(elements.inpIdcardSecCode, "idcardSecCode", "doc-ic-sec");
  bindDocInput(elements.inpIdcardBadgeLabel, "idcardBadgeLabel", "doc-ic-badge-label");

  bindDocInput(elements.inpCredIssuer, "credIssuer", "doc-cr-issuer");
  bindDocInput(elements.inpCredType, "credType", "doc-cr-type");

  bindDocInput(elements.inpPayPeriod, "payPeriod", "doc-ps-period");
  bindDocInput(elements.inpPayDate, "payDate", "doc-ps-date");
  bindDocInput(elements.inpPayAdviceNo, "payAdviceNo", "doc-ps-advice");
  
  if (elements.inpPayGross) {
    elements.inpPayGross.addEventListener("input", (e) => {
      docStudioState.payGross = e.target.value;
      const t1 = document.getElementById("doc-ps-tbl-gross");
      const t2 = document.getElementById("doc-ps-sum-gross");
      if (t1) t1.textContent = e.target.value;
      if (t2) t2.textContent = e.target.value;
    });
  }

  if (elements.inpPayNet) {
    elements.inpPayNet.addEventListener("input", (e) => {
      docStudioState.payNet = e.target.value;
      const t1 = document.getElementById("doc-ps-sum-net");
      const t2 = document.getElementById("doc-ps-slip-net");
      if (t1) t1.textContent = e.target.value;
      if (t2) t2.textContent = "AMOUNT: " + e.target.value;
    });
  }

  if (elements.chkDeskMode) {
    elements.chkDeskMode.addEventListener("change", (e) => {
      document.getElementById("doc-wrapper").classList.toggle("desk-mode", e.target.checked);
      showToast(e.target.checked ? "Đã bật chế độ chụp bàn làm việc!" : "Đã tắt chế độ chụp bàn");
    });
  }

  // Signature Customization Listeners
  const inpStampColor = document.getElementById("inp-stamp-color");
  if (inpStampColor) {
    inpStampColor.addEventListener("change", (e) => {
      const color = e.target.value;
      const group = document.getElementById("stamp-inner-group");
      if (group) {
        group.setAttribute("stroke", color);
        group.setAttribute("fill", color);
      }
    });
  }

  const chkScannerMode = document.getElementById("chk-scanner-mode");
  if (chkScannerMode) {
    chkScannerMode.addEventListener("change", (e) => {
      elements.docTargetLetter.classList.toggle("scanner-mode", e.target.checked);
      showToast(e.target.checked ? "Đã bật chế độ máy quét Scan thực tế" : "Đã tắt chế độ máy quét Scan");
    });
  }

  if (elements.inpSigInkColor) {
    elements.inpSigInkColor.addEventListener("change", (e) => {
      const color = e.target.value;
      const g = document.querySelector("#letter-sig-svg g");
      if (g) g.setAttribute("stroke", color);
      if (sigCtx) sigCtx.strokeStyle = color;
    });
  }

  // Upload custom signature image
  if (elements.inpSigUpload) {
    elements.inpSigUpload.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          applyCustomSignature(event.target.result);
          showToast("✅ Đã nạp chữ ký ảnh thật thành công!");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Remove custom signature
  if (elements.btnRemoveCustomSig) {
    elements.btnRemoveCustomSig.addEventListener("click", () => {
      const customImg = document.getElementById("letter-sig-custom-img");
      const sigSvg = document.getElementById("letter-sig-svg");
      if (customImg && sigSvg) {
        customImg.style.display = "none";
        customImg.src = "";
        sigSvg.style.display = "block";
        elements.btnRemoveCustomSig.style.display = "none";
        if (elements.inpSigUpload) elements.inpSigUpload.value = "";
        showToast("Đã khôi phục chữ ký bút máy mặc định");
      }
    });
  }

  // Open & Close Signature Pad Modal
  if (elements.btnOpenPad) {
    elements.btnOpenPad.addEventListener("click", () => {
      elements.sigPadModal.classList.add("open");
      initSigPad();
    });
  }

  const closeSigPad = () => {
    elements.sigPadModal.classList.remove("open");
  };

  if (elements.btnCloseSigPad) elements.btnCloseSigPad.addEventListener("click", closeSigPad);
  if (elements.btnCancelSigPad) elements.btnCancelSigPad.addEventListener("click", closeSigPad);

  if (elements.btnClearSigPad) {
    elements.btnClearSigPad.addEventListener("click", () => {
      if (sigCtx && elements.sigCanvas) {
        sigCtx.clearRect(0, 0, elements.sigCanvas.width, elements.sigCanvas.height);
      }
    });
  }

  if (elements.btnApplySigPad) {
    elements.btnApplySigPad.addEventListener("click", () => {
      if (elements.sigCanvas) {
        const dataUrl = elements.sigCanvas.toDataURL("image/png");
        applyCustomSignature(dataUrl);
        closeSigPad();
        showToast("✅ Đã áp dụng chữ ký tay của bạn!");
      }
    });
  }

  // SheerID Auto Date Freshener (Guarantees dates fall within SheerID's 90-day window)
  const btnFreshDates = document.getElementById("btn-fresh-dates");
  if (btnFreshDates) {
    btnFreshDates.addEventListener("click", () => {
      const now = new Date();
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const currentMonth = monthNames[now.getMonth()];
      const currentDay = now.getDate();
      const currentYear = now.getFullYear();

      // 1. Set letter date to today
      const todayStr = `Date: ${currentMonth} ${currentDay}, ${currentYear}`;
      docStudioState.letterDate = todayStr;
      if (elements.inpLetterDate) elements.inpLetterDate.value = todayStr;
      const ltDate = document.getElementById("doc-lt-date");
      if (ltDate) ltDate.textContent = todayStr;

      // 2. Set paystub within last 2-3 weeks (guaranteed within SheerID 90-day rule)
      const payMonth = now.getMonth() + 1;
      const payDay = Math.max(1, currentDay - 4);
      const payDateStr = `${String(payMonth).padStart(2, '0')}/${String(payDay).padStart(2, '0')}/${currentYear}`;
      const periodStr = `${String(payMonth).padStart(2, '0')}/01/${currentYear} - ${String(payMonth).padStart(2, '0')}/15/${currentYear}`;

      docStudioState.payDate = payDateStr;
      docStudioState.payPeriod = periodStr;
      if (elements.inpPayDate) elements.inpPayDate.value = payDateStr;
      if (elements.inpPayPeriod) elements.inpPayPeriod.value = periodStr;
      const psDate = document.getElementById("doc-ps-date");
      if (psDate) psDate.textContent = payDateStr;
      const psPeriod = document.getElementById("doc-ps-period");
      if (psPeriod) psPeriod.textContent = periodStr;

      // 3. Set ID card expiration 1 year in future (guaranteed valid date per SheerID)
      const expStr = `EXP: 06/${currentYear + 1}`;
      docStudioState.idcardExp = expStr;
      if (elements.inpIdcardExp) elements.inpIdcardExp.value = expStr;
      const icExp = document.getElementById("doc-ic-exp");
      if (icExp) icExp.textContent = expStr;

      showToast("✅ Đã cập nhật toàn bộ ngày tháng mới nhất chuẩn SheerID (trong 30 ngày)!");
    });
  }
}

function applyCustomSignature(dataUrl) {
  const customImg = document.getElementById("letter-sig-custom-img");
  const sigSvg = document.getElementById("letter-sig-svg");
  if (customImg && sigSvg) {
    customImg.src = dataUrl;
    customImg.style.display = "block";
    sigSvg.style.display = "none";
    if (elements.btnRemoveCustomSig) elements.btnRemoveCustomSig.style.display = "inline-block";
  }
}

// Canvas Drawing Pad Logic
let isDrawing = false;
let sigCtx = null;

function initSigPad() {
  const canvas = elements.sigCanvas;
  if (!canvas) return;
  sigCtx = canvas.getContext("2d");
  sigCtx.lineWidth = 2.4;
  sigCtx.lineCap = "round";
  sigCtx.lineJoin = "round";
  sigCtx.strokeStyle = elements.inpSigInkColor ? elements.inpSigInkColor.value : "#183b6b";

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if (e.touches && e.touches.length > 0) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }

  function startDraw(e) {
    e.preventDefault();
    isDrawing = true;
    const pos = getPos(e);
    sigCtx.beginPath();
    sigCtx.moveTo(pos.x, pos.y);
  }

  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPos(e);
    sigCtx.lineTo(pos.x, pos.y);
    sigCtx.stroke();
  }

  function stopDraw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    isDrawing = false;
  }

  canvas.removeEventListener("mousedown", startDraw);
  canvas.removeEventListener("mousemove", draw);
  canvas.removeEventListener("mouseup", stopDraw);

  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDraw);
  canvas.addEventListener("mouseleave", stopDraw);

  canvas.addEventListener("touchstart", startDraw, { passive: false });
  canvas.addEventListener("touchmove", draw, { passive: false });
  canvas.addEventListener("touchend", stopDraw, { passive: false });
}

function openDocStudio(tabName = "letter") {
  syncPortalToDocuments();
  switchDocTab(tabName);
  elements.docStudioModal.classList.add("open");
  showToast("Đã mở Studio tạo tài liệu!");
}

function closeDocStudio() {
  elements.docStudioModal.classList.remove("open");
}

function getStandardFileName(type, ext) {
  const schoolShort = (state.brandMain || "School").replace(/[^a-zA-Z0-9]/g, "");
  const nameClean = (state.facultyName || "Faculty").trim().replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "");
  const lastName = (state.facultyName || "Faculty").trim().split(/\s+/).pop().replace(/[^a-zA-Z0-9]/g, "");
  const yearClean = "2025-26";

  if (type === "portal-png" || type === "portal-pdf") {
    return `${schoolShort}_Educator_Portal_${nameClean}_${yearClean}.${ext}`;
  }

  if (type === "letter") {
    const doc1 = state.docs[0] ? state.docs[0].name.replace(/\.[^/.]+$/, "").replace(/\s+/g, "_") : `Educator_Employment_Record_${yearClean}`;
    return `${doc1}.${ext}`;
  }

  if (type === "idcard") {
    const docId = state.docs.find(d => /id|badge|card/i.test(d.name));
    if (docId) {
      return `${docId.name.replace(/\.[^/.]+$/, "").replace(/\s+/g, "_")}.${ext}`;
    }
    return `${schoolShort}_Corporate_Faculty_ID_${lastName}.${ext}`;
  }

  if (type === "credential") {
    const docCred = state.docs.find(d => /credential|certificate|guide/i.test(d.name));
    if (docCred) {
      return `${docCred.name.replace(/\.[^/.]+$/, "").replace(/\s+/g, "_")}.${ext}`;
    }
    return `${schoolShort}_Teaching_Credential_${nameClean}.${ext}`;
  }

  if (type === "paystub") {
    return `${schoolShort}_Faculty_Paystub_Earnings_Statement_${yearClean}.${ext}`;
  }

  return `${nameClean}_Verification_Document.${ext}`;
}

function switchDocTab(tabName) {
  activeDocTab = tabName;

  // Reset scroll of preview stage to top so full document is in view
  const stage = document.querySelector(".modal-preview-stage");
  if (stage) stage.scrollTop = 0;

  // Update tabs buttons UI
  document.querySelectorAll(".modal-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabName);
  });

  // Switch Views
  if (elements.docTargetLetter) elements.docTargetLetter.style.display = tabName === "letter" ? "flex" : "none";
  if (elements.docTargetIdcard) elements.docTargetIdcard.style.display = tabName === "idcard" ? "flex" : "none";
  if (elements.docTargetCredential) elements.docTargetCredential.style.display = tabName === "credential" ? "flex" : "none";
  if (elements.docTargetPaystub) elements.docTargetPaystub.style.display = tabName === "paystub" ? "flex" : "none";

  // Switch Controls
  if (elements.ctrlTabLetter) elements.ctrlTabLetter.style.display = tabName === "letter" ? "block" : "none";
  if (elements.ctrlTabIdcard) elements.ctrlTabIdcard.style.display = tabName === "idcard" ? "block" : "none";
  if (elements.ctrlTabCredential) elements.ctrlTabCredential.style.display = tabName === "credential" ? "block" : "none";
  if (elements.ctrlTabPaystub) elements.ctrlTabPaystub.style.display = tabName === "paystub" ? "block" : "none";

  // Auto populate standardized official filename
  if (elements.inpDocSaveName) {
    elements.inpDocSaveName.value = getStandardFileName(tabName, "pdf");
  }
}

// Sync faculty profile data into document templates
function syncPortalToDocuments() {
  // 1. Sync Letter
  const schoolFullName = state.meta2Value || `${state.brandMain} ${state.brandTag}`;
  document.getElementById("doc-lt-school-name").textContent = schoolFullName.toUpperCase();
  document.getElementById("doc-lt-school-sub").textContent = `${schoolFullName} • Educator Credential & Compliance`;
  document.getElementById("doc-lt-contact-meta").innerHTML = escapeHtml(state.officeAddress).replace(/\n/g, "<br>") + `<br>Email: ${escapeHtml(state.email)}`;
  document.getElementById("doc-lt-faculty-name").textContent = state.facultyName;
  document.getElementById("doc-lt-org").textContent = schoolFullName;
  document.getElementById("doc-lt-tbl-name").textContent = state.facultyName;
  document.getElementById("doc-lt-tbl-id").textContent = state.corporateId;
  document.getElementById("doc-lt-tbl-title").textContent = state.facultySubtitle;
  document.getElementById("doc-lt-tbl-loc").textContent = state.meta3Value;

  // 2. Sync ID Card
  document.getElementById("doc-ic-brand").textContent = schoolFullName;
  document.getElementById("doc-ic-header").style.backgroundColor = state.accentColor || "#0b2138";
  document.getElementById("doc-ic-name").textContent = state.facultyName;
  document.getElementById("doc-ic-role").textContent = state.facultySubtitle;
  document.getElementById("doc-ic-role").style.color = state.accentColor;
  document.getElementById("doc-ic-id").textContent = state.corporateId;

  if (state.avatarType === "image" && state.avatarImageUrl) {
    document.getElementById("doc-ic-initials").style.display = "none";
    document.getElementById("doc-ic-photo-img").style.display = "block";
    document.getElementById("doc-ic-photo-img").src = state.avatarImageUrl;
  } else {
    document.getElementById("doc-ic-initials").style.display = "block";
    document.getElementById("doc-ic-initials").textContent = state.facultyInitials || computeInitials(state.facultyName);
    document.getElementById("doc-ic-photo-img").style.display = "none";
  }

  // 3. Sync Credential
  document.getElementById("doc-cr-name").textContent = state.facultyName;

  // 4. Sync Paystub
  const psSchool = document.getElementById("doc-ps-school-name");
  if (psSchool) psSchool.textContent = schoolFullName.toUpperCase();
  const psName = document.getElementById("doc-ps-name");
  if (psName) psName.textContent = state.facultyName;
  const psId = document.getElementById("doc-ps-id");
  if (psId) psId.textContent = state.corporateId;
  const psDept = document.getElementById("doc-ps-dept");
  if (psDept) psDept.textContent = state.facultySubtitle;

  const einMap = {
    lausd: { sub: "Los Angeles Unified School District • Payroll & Disbursements", ein: "Beaudry HQ, Los Angeles, CA • Federal EIN: 95-6002148 • NCES ID: 0622710" },
    fcps: { sub: "Fairfax County Public Schools • Office of Payroll & Benefits", ein: "8115 Gatehouse Rd, Falls Church, VA • Federal EIN: 54-6001234 • NCES ID: 5101260" },
    ccsd: { sub: "Clark County School District • Certificated Employee Services", ein: "5100 W Sahara Ave, Las Vegas, NV • Federal EIN: 88-6000085 • NCES ID: 3200060" },
    mdcps: { sub: "Miami-Dade County Public Schools • Payroll Operations", ein: "1450 NE 2nd Ave, Miami, FL • Federal EIN: 59-6000530 • NCES ID: 1200390" },
    hisd: { sub: "Houston Independent School District • Employee Financial Services", ein: "4400 W 18th St, Houston, TX • Federal EIN: 74-6001150 • NCES ID: 4823640" },
    demille: { sub: "Westminster School District • Payroll & Certificated Disbursements", ein: "15400 Bushard St, Midway City, CA • Federal EIN: 95-6002148 • NCES ID: 0642150" },
    stride: { sub: "Stride, Inc. (K12) • Certificated Corporate Payroll", ein: "Tampa Office, FL • Federal EIN: 52-2229505 • Cognia Accredited K-12" },
    connections: { sub: "Connections Academy / Pearson • Virtual Schools Payroll", ein: "Columbia, MD • Federal EIN: 52-2309100 • Cognia Accredited K-12" },
    stanford: { sub: "Stanford Online High School • Controller's Office", ein: "Stanford, CA • Federal EIN: 94-1156352 • WASC Accredited" },
    mit: { sub: "MIT Open Learning • Institute Accounting & Payroll", ein: "Cambridge, MA • Federal EIN: 04-2103594 • NECHE Accredited" },
    hust: { sub: "Đại học Bách Khoa Hà Nội • Phòng Kế hoạch - Tài chính", ein: "Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội • Mã số thuế: 0101438902 • Mã trường: BKA" },
    hcmut: { sub: "Trường ĐH Bách Khoa - ĐHQG TP.HCM • Phòng Kế toán - Tài chính", ein: "268 Lý Thường Kiệt, Q.10, TP.HCM • Mã số thuế: 0302568412 • Mã trường: QSB" },
    ueh: { sub: "Đại học Kinh tế TP. Hồ Chí Minh • Ban Tài chính Kế toán", ein: "59C Nguyễn Đình Chiểu, Q.3, TP.HCM • Mã số thuế: 0302781490 • Mã trường: KSA" },
    amsterdam: { sub: "Trường THPT Chuyên Hà Nội - Amsterdam • Kế toán Tài vụ", ein: "Số 1 Hoàng Minh Giám, Cầu Giấy, Hà Nội • Mã số thuế: 0101569420" },
    hust_student: { sub: "Đại học Bách Khoa Hà Nội • Phòng Quản lý Đào tạo", ein: "Số 1 Đại Cồ Việt, Hà Nội • Mã trường: BKA" },
    lehongphong_student: { sub: "Trường THPT Chuyên Lê Hồng Phong TP.HCM • Văn phòng", ein: "235 Nguyễn Văn Cừ, Quận 5, TP.HCM" }
  };
  const curKey = elements.inpPreset ? elements.inpPreset.value : "stride";
  let einInfo = einMap[curKey];
  if (!einInfo && state.customEin) {
    const addrFirstLine = (state.footerAddress || "").split('\n')[0] || "Headquarters";
    einInfo = {
      sub: `${schoolFullName} • Payroll & Certificated Disbursements`,
      ein: `${addrFirstLine} • Federal EIN: ${state.customEin} • NCES ID: ${state.customNces || "1201440"}`
    };
  }
  if (!einInfo) {
    einInfo = { sub: `${schoolFullName} • Payroll Disbursements`, ein: `Federal EIN: 95-6002148 • NCES Accredited K-12` };
  }
  const psSub = document.getElementById("doc-ps-sub");
  if (psSub) psSub.textContent = einInfo.sub;
  const psEin = document.getElementById("doc-ps-ein");
  if (psEin) psEin.textContent = einInfo.ein;

  // Vietnamese Localization Adaptation
  if (state.country === "vn") {
    const stampTextTop = document.querySelector("#letter-stamp-svg textPath[href='#stamp-top-path']");
    const stampTextBot = document.querySelector("#letter-stamp-svg textPath[href='#stamp-bot-path']");
    if (stampTextTop) stampTextTop.textContent = "★ BỘ GIÁO DỤC VÀ ĐÀO TẠO ★";
    if (stampTextBot) stampTextBot.textContent = schoolFullName.toUpperCase();

    const signer = document.getElementById("doc-lt-signer");
    if (signer) signer.textContent = "GS. TS. Lê Văn Tuấn";
    const signerRole = document.getElementById("doc-lt-signer-role");
    if (signerRole) signerRole.textContent = "HIỆU TRƯỞNG / TRƯỞNG PHÒNG TCCB";

    const ltSub = document.getElementById("doc-lt-school-sub");
    if (ltSub) ltSub.textContent = "Hệ thống Cổng Quản lý Đào tạo & Cán bộ Giảng viên";

    // Adjust Paystub amounts to VND
    const tblGross = document.getElementById("doc-ps-tbl-gross");
    const sumGross = document.getElementById("doc-ps-sum-gross");
    const sumNet = document.getElementById("doc-ps-sum-net");
    const slipNet = document.getElementById("doc-ps-slip-net");
    if (tblGross) tblGross.textContent = "16.965.000 VNĐ";
    if (sumGross) sumGross.textContent = "16.965.000 VNĐ";
    if (sumNet) sumNet.textContent = "15.260.960 VNĐ";
    if (slipNet) slipNet.textContent = "THỰC LĨNH: 15.260.960 VNĐ";
  } else {
    const stampTextTop = document.querySelector("#letter-stamp-svg textPath[href='#stamp-top-path']");
    const stampTextBot = document.querySelector("#letter-stamp-svg textPath[href='#stamp-bot-path']");
    if (stampTextTop) stampTextTop.textContent = "★ CERTIFIED FACULTY RECORD ★";
    if (stampTextBot) stampTextBot.textContent = "OFFICE OF HUMAN RESOURCES";

    const signer = document.getElementById("doc-lt-signer");
    if (signer) signer.textContent = "Dr. Eleanor Vance, Ph.D.";
    const signerRole = document.getElementById("doc-lt-signer-role");
    if (signerRole) signerRole.textContent = "Director of Human Resources & Academic Compliance";
  }
}

// Apply Custom School Setup Data
function applyCustomSchoolData() {
  const fullname = (elements.inpCsFullname && elements.inpCsFullname.value.trim()) || "Orange County Public Schools (OCPS)";
  const brand = (elements.inpCsBrand && elements.inpCsBrand.value.trim()) || "OCPS";
  const tag = (elements.inpCsTag && elements.inpCsTag.value.trim()) || "Public Schools";
  let domain = (elements.inpCsDomain && elements.inpCsDomain.value.trim()) || "ocps.net";
  domain = domain.toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '').trim();
  const nces = (elements.inpCsNces && elements.inpCsNces.value.trim()) || "1201440";
  const ein = (elements.inpCsEin && elements.inpCsEin.value.trim()) || "59-6000780";
  const erp = (elements.inpCsErp && elements.inpCsErp.value) || "PowerSchool Unified SIS";
  const address = (elements.inpCsAddress && elements.inpCsAddress.value.trim()) || "445 W Amelia St\nOrlando, FL 32801\n(407) 317-3200";

  // Compute username from faculty name
  const nameParts = (state.facultyName || "educator").trim().toLowerCase().split(/\s+/);
  const username = nameParts.length > 1 ? (nameParts[0][0] + nameParts[nameParts.length - 1]) : nameParts[0];
  const sanitizedNameSlug = (state.facultyName || "educator").toLowerCase().replace(/[^a-z0-9]/g, "-");

  state.meta2Value = fullname;
  state.brandMain = brand;
  state.brandTag = tag;
  state.browserUrl = `https://www.${domain}/staff/directory/${sanitizedNameSlug}`;
  state.email = `${username}@${domain}`;
  state.footerAddress = address;
  state.footerCopyright = `© 2026 ${fullname}\nExcellence and Opportunity in Public Education`;

  // Custom metadata for EIN / NCES
  state.customEin = ein;
  state.customNces = nces;
  state.customErp = erp;

  // Update audit bar token
  const auditToken = document.getElementById("pv-audit-token");
  if (auditToken) {
    auditToken.textContent = `SEC-AUTH: ${nces}-2026 • ${erp}`;
  }

  // Update preset selector if not on custom_school
  if (elements.inpPreset) elements.inpPreset.value = "custom_school";

  populateFormFromState();
  updatePreview();
  syncPortalToDocuments();
  showToast(`✅ Đã áp dụng trường: ${fullname}`);
}

// Export Screenshot Portal as PDF (Lightweight & Sharp)
async function downloadPortalPdf() {
  const target = document.getElementById("screenshot-target");
  if (!target) return;

  const originalTransform = elements.previewWrapper.style.transform;
  elements.previewWrapper.style.transform = "none";
  showToast("Đang kết xuất PDF cổng trường (Tối ưu nhẹ <1MB)...");

  try {
    const canvas = await html2canvas(target, {
      scale: 1.5, // Crisp HD rendering without massive payload
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#eef2f6",
      logging: false
    });

    elements.previewWrapper.style.transform = originalTransform;

    if (!canvas || !canvas.width || !canvas.height) {
      throw new Error("Không thể chụp cổng trường (canvas 0x0)");
    }

    const { jsPDF } = window.jspdf;
    // Standard A4 landscape format (297mm x 210mm)
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4"
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.88);
    const pageWidth = 297;
    const pageHeight = 210;
    const ratio = (canvas.width > 0) ? (canvas.height / canvas.width) : 1;
    let imgWidth = pageWidth;
    let imgHeight = pageWidth * ratio;

    if (imgHeight > pageHeight) {
      imgWidth = (pageHeight / imgHeight) * imgWidth;
      imgHeight = pageHeight;
    }

    imgWidth = (isFinite(imgWidth) && imgWidth > 0) ? Math.round(imgWidth * 100) / 100 : pageWidth;
    imgHeight = (isFinite(imgHeight) && imgHeight > 0) ? Math.round(imgHeight * 100) / 100 : pageHeight;
    const posX = Math.max(0, Math.round(((pageWidth - imgWidth) / 2) * 100) / 100);
    const posY = Math.max(0, Math.round(((pageHeight - imgHeight) / 2) * 100) / 100);

    pdf.addImage(imgData, "JPEG", posX, posY, imgWidth, imgHeight, undefined, "FAST");

    const fileName = getStandardFileName("portal-pdf", "pdf");
    pdf.save(fileName);
    showToast("✅ Đã xuất PDF cổng trường siêu nhẹ & sắc nét!");
  } catch (err) {
    elements.previewWrapper.style.transform = originalTransform;
    console.error("PDF export error:", err);
    alert("Có lỗi khi xuất PDF: " + err.message);
  }
}

// Export Active Document in Studio as PDF (Lightweight & Sharp)
async function downloadDocPdf() {
  const targetId = (
    activeDocTab === "letter" ? "doc-target-letter" :
    activeDocTab === "paystub" ? "doc-target-paystub" :
    activeDocTab === "idcard" ? "doc-target-idcard" :
    "doc-target-credential"
  );
  const target = document.getElementById(targetId);
  if (!target) return;

  showToast("Đang tạo tệp PDF tài liệu (Tối ưu nhẹ <1MB)...");

  // Force target view to be active & visible
  target.style.display = "flex";
  target.style.visibility = "visible";
  target.style.opacity = "1";

  // Hide the other 3 document targets
  ["doc-target-letter", "doc-target-idcard", "doc-target-credential", "doc-target-paystub"].forEach(id => {
    if (id !== targetId) {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    }
  });

  // Reset stage scroll position so element is fully rendered from top
  const stage = document.querySelector(".modal-preview-stage");
  if (stage) stage.scrollTop = 0;

  await new Promise(r => setTimeout(r, 80));

  try {
    const canvas = await html2canvas(target, {
      scale: 1.8,
      useCORS: true,
      allowTaint: true,
      backgroundColor: activeDocTab === "idcard" ? "#080d19" : "#ffffff",
      logging: false
    });

    if (!canvas || !canvas.width || !canvas.height) {
      throw new Error("Không thể đo kích thước tài liệu (canvas 0x0)");
    }

    const orientation = (activeDocTab === "credential") ? "landscape" : "portrait";
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
      orientation: orientation,
      unit: "mm",
      format: "a4"
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.90);
    const pageWidth = orientation === "portrait" ? 210 : 297;
    const pageHeight = orientation === "portrait" ? 297 : 210;
    const ratio = canvas.height / canvas.width;

    let imgWidth = pageWidth;
    let imgHeight = pageWidth * ratio;

    if (imgHeight > pageHeight) {
      imgWidth = (pageHeight / imgHeight) * imgWidth;
      imgHeight = pageHeight;
    }

    const posX = Math.max(0, (pageWidth - imgWidth) / 2);
    const posY = Math.max(0, (pageHeight - imgHeight) / 2);

    pdf.addImage(imgData, "JPEG", posX, posY, imgWidth, imgHeight, undefined, "FAST");

    let fileName = (elements.inpDocSaveName && elements.inpDocSaveName.value.trim()) 
      ? elements.inpDocSaveName.value.trim() 
      : getStandardFileName(activeDocTab, "pdf");
    if (!fileName.toLowerCase().endsWith(".pdf")) fileName += ".pdf";

    pdf.save(fileName);
    showToast(`✅ Đã xuất: ${fileName}`);
  } catch (err) {
    console.error("Document PDF error:", err);
    alert("Có lỗi khi tạo PDF tài liệu: " + err.message);
  }
}

// Export Active Document in Studio as PNG
async function downloadDocPng() {
  const targetId = (
    activeDocTab === "letter" ? "doc-target-letter" :
    activeDocTab === "paystub" ? "doc-target-paystub" :
    activeDocTab === "idcard" ? "doc-target-idcard" :
    "doc-target-credential"
  );
  const target = document.getElementById(targetId);
  if (!target) return;

  showToast("Đang kết xuất ảnh PNG tài liệu...");

  // Force target view to be active & visible
  target.style.display = "flex";
  target.style.visibility = "visible";
  target.style.opacity = "1";

  // Hide the other 3 document targets
  ["doc-target-letter", "doc-target-idcard", "doc-target-credential", "doc-target-paystub"].forEach(id => {
    if (id !== targetId) {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    }
  });

  const stage = document.querySelector(".modal-preview-stage");
  if (stage) stage.scrollTop = 0;

  await new Promise(r => setTimeout(r, 80));

  try {
    const canvas = await html2canvas(target, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: activeDocTab === "idcard" ? "#080d19" : "#ffffff",
      logging: false
    });

    let fileName = (elements.inpDocSaveName && elements.inpDocSaveName.value.trim()) 
      ? elements.inpDocSaveName.value.trim().replace(/\.pdf$/i, "") 
      : getStandardFileName(activeDocTab, "png").replace(/\.png$/i, "");
    if (!fileName.toLowerCase().endsWith(".png")) fileName += ".png";

    const link = document.createElement("a");
    link.download = fileName;
    link.href = canvas.toDataURL("image/png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`✅ Tải ảnh tài liệu: ${fileName}`);
  } catch (err) {
    console.error("Document PNG error:", err);
    alert("Có lỗi khi tải ảnh tài liệu: " + err.message);
  }
}

// Generate Screenshot with html2canvas at Retina crisp quality
async function generateScreenshot(copyToClipboard = false) {
  const target = document.getElementById("screenshot-target");
  if (!target) return;

  const originalTransform = elements.previewWrapper.style.transform;
  // temporarily remove scale during html2canvas capture to ensure exact pixel sizing
  elements.previewWrapper.style.transform = "none";

  showToast(copyToClipboard ? "Đang chuẩn bị ảnh copy..." : "Đang kết xuất ảnh screenshot...");

  try {
    const canvas = await html2canvas(target, {
      scale: 2, // 2x retina crisp resolution (2720px wide)
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#eef2f6",
      logging: false
    });

    // restore scale
    elements.previewWrapper.style.transform = originalTransform;

    if (copyToClipboard) {
      canvas.toBlob(async (blob) => {
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": blob })
          ]);
          showToast("✅ Đã copy ảnh screenshot vào Clipboard!");
        } catch (err) {
          console.error("Clipboard write error:", err);
          // Fallback download if clipboard API is restricted
          downloadCanvas(canvas);
          showToast("Không thể copy trực tiếp, đã tự động tải file PNG!");
        }
      }, "image/png");
    } else {
      downloadCanvas(canvas);
      showToast("✅ Tải ảnh screenshot thành công!");
    }
  } catch (err) {
    elements.previewWrapper.style.transform = originalTransform;
    console.error("Capture failed:", err);
    alert("Có lỗi khi tạo ảnh screenshot: " + err.message);
  }
}

function downloadCanvas(canvas) {
  const fileName = getStandardFileName("portal-png", "png");
  const link = document.createElement("a");
  link.download = fileName;
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Export Complete Bundle as 1 ZIP file
async function downloadCompleteZipBundle() {
  if (typeof JSZip === "undefined") {
    alert("Thư viện JSZip chưa sẵn sàng!");
    return;
  }

  const overlay = document.getElementById("zip-overlay");
  const progressText = document.getElementById("zip-progress-text");
  if (overlay) overlay.classList.add("active");

  const zip = new JSZip();
  const schoolShort = (state.brandMain || "School").replace(/[^a-zA-Z0-9]/g, "");
  const nameClean = (state.facultyName || "User").trim().replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "");
  const roleName = (elements.inpUserRole && elements.inpUserRole.value === "student") ? "Student" : "Faculty";
  const folderName = `${schoolShort}_${roleName}_${nameClean}_Full_Verification_Package`;
  const root = zip.folder(folderName);

  const originalTransform = elements.previewWrapper.style.transform;
  elements.previewWrapper.style.transform = "none";

  // Remember modal and tab states
  const modal = elements.docStudioModal;
  const wasModalOpen = modal.classList.contains("open");
  const originalActiveTab = activeDocTab;

  // Make modal fully active and visible behind the overlay (never use visibility:hidden as html2canvas will skip drawing!)
  modal.classList.add("open");
  modal.style.display = "flex";
  modal.style.visibility = "visible";
  modal.style.opacity = "1";

  const waitMs = (ms) => new Promise(res => setTimeout(res, ms));

  try {
    const { jsPDF } = window.jspdf;

    // 1. Capture Portal Screenshot PNG
    if (progressText) progressText.textContent = "1/5: Đang chụp ảnh Cổng trường học (PNG 2K)...";
    await waitMs(60);
    try {
      const portalCanvas = await html2canvas(document.getElementById("screenshot-target"), {
        scale: 1.8,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#eef2f6",
        logging: false
      });
      const portalPngBase64 = portalCanvas.toDataURL("image/png").split(",")[1];
      root.file(getStandardFileName("portal-png", "png"), portalPngBase64, { base64: true });

      // 2. Generate Portal PDF
      if (progressText) progressText.textContent = "2/5: Đang tạo tệp PDF Cổng trường học...";
      const portalPdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
      const portalJpg = portalCanvas.toDataURL("image/jpeg", 0.88);
      portalPdf.addImage(portalJpg, "JPEG", 0, 0, 297, Math.min((portalCanvas.height / portalCanvas.width) * 297, 210), undefined, "FAST");
      root.file(getStandardFileName("portal-pdf", "pdf"), portalPdf.output("blob"));
    } catch (e1) {
      console.warn("Portal capture warning:", e1);
    }

    elements.previewWrapper.style.transform = originalTransform;

    // Synchronize data to all documents
    syncPortalToDocuments();

    // 3. Generate Letter / Enrollment Verification PDF
    if (progressText) progressText.textContent = "3/5: Đang kết xuất Thư xác nhận công tác / nhập học (PDF A4)...";
    switchDocTab("letter");
    await waitMs(100); // Allow DOM reflow & font layout
    try {
      const ltTarget = elements.docTargetLetter || document.getElementById("doc-target-letter");
      const letterCanvas = await html2canvas(ltTarget, {
        scale: 1.8,
        scrollX: 0,
        scrollY: 0,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false
      });

      const letterPdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const ltJpg = letterCanvas.toDataURL("image/jpeg", 0.90);
      const ratio = (letterCanvas.width > 0) ? (letterCanvas.height / letterCanvas.width) : 1;
      let imgW = 210;
      let imgH = 210 * ratio;
      if (imgH > 297) { imgW = (297 / imgH) * imgW; imgH = 297; }
      const posX = Math.max(0, Math.round(((210 - imgW) / 2) * 100) / 100);
      const posY = Math.max(0, Math.round(((297 - imgH) / 2) * 100) / 100);
      letterPdf.addImage(ltJpg, "JPEG", posX, posY, imgW, imgH, undefined, "FAST");
      root.file(getStandardFileName("letter", "pdf"), letterPdf.output("blob"));
    } catch (e2) {
      console.warn("Letter capture warning:", e2);
    }

    // 4. Generate ID Card PNG
    if (progressText) progressText.textContent = "4/5: Đang kết xuất Thẻ ID Card nhân sự / học sinh...";
    switchDocTab("idcard");
    await waitMs(100);
    try {
      const idTarget = elements.docTargetIdcard || document.getElementById("doc-target-idcard");
      const idCanvas = await html2canvas(idTarget, {
        scale: 2.2,
        scrollX: 0,
        scrollY: 0,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#080d19",
        logging: false
      });

      const idCardBase64 = idCanvas.toDataURL("image/png").split(",")[1];
      root.file(getStandardFileName("idcard", "png"), idCardBase64, { base64: true });
    } catch (e3) {
      console.warn("ID Card capture warning:", e3);
    }

    // 5. Generate Paystub PDF
    if (progressText) progressText.textContent = "5/5: Đang kết xuất Phiếu lương / Bảng điểm...";
    switchDocTab("paystub");
    await waitMs(100);
    try {
      const psTarget = elements.docTargetPaystub || document.getElementById("doc-target-paystub");
      if (psTarget) {
        const psCanvas = await html2canvas(psTarget, {
          scale: 1.8,
          scrollX: 0,
          scrollY: 0,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
          logging: false
        });

        const psPdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
        const psJpg = psCanvas.toDataURL("image/jpeg", 0.90);
        const ratio = (psCanvas.width > 0) ? (psCanvas.height / psCanvas.width) : 1;
        let imgW = 210;
        let imgH = 210 * ratio;
        if (imgH > 297) { imgW = (297 / imgH) * imgW; imgH = 297; }
        const posX = Math.max(0, Math.round(((210 - imgW) / 2) * 100) / 100);
        const posY = Math.max(0, Math.round(((297 - imgH) / 2) * 100) / 100);
        psPdf.addImage(psJpg, "JPEG", posX, posY, imgW, imgH, undefined, "FAST");
        root.file(getStandardFileName("paystub", "pdf"), psPdf.output("blob"));
      }
    } catch (e4) {
      console.warn("Paystub capture warning:", e4);
    }

    // 6. Generate Credential / Academic Guide PDF
    try {
      switchDocTab("credential");
      await waitMs(100);
      const crTarget = elements.docTargetCredential || document.getElementById("doc-target-credential");
      const credCanvas = await html2canvas(crTarget, {
        scale: 1.8,
        scrollX: 0,
        scrollY: 0,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false
      });

      const credPdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
      const crJpg = credCanvas.toDataURL("image/jpeg", 0.90);
      const ratio = (credCanvas.width > 0) ? (credCanvas.height / credCanvas.width) : 1;
      let imgW = 297;
      let imgH = 297 * ratio;
      if (imgH > 210) { imgW = (210 / imgH) * imgW; imgH = 210; }
      const posX = Math.max(0, Math.round(((297 - imgW) / 2) * 100) / 100);
      const posY = Math.max(0, Math.round(((210 - imgH) / 2) * 100) / 100);
      credPdf.addImage(crJpg, "JPEG", posX, posY, imgW, imgH, undefined, "FAST");
      root.file(getStandardFileName("credential", "pdf"), credPdf.output("blob"));
    } catch (e5) {
      console.warn("Credential capture warning:", e5);
    }

    // Restore original active tab & modal state
    switchDocTab(originalActiveTab);
    if (!wasModalOpen) {
      modal.classList.remove("open");
      modal.style.display = "";
      modal.style.visibility = "";
      modal.style.opacity = "";
    }

    if (progressText) progressText.textContent = "Đang nén tệp ZIP...";
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(zipBlob);
    link.download = `${folderName}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (overlay) overlay.classList.remove("active");
    showToast(`✅ Đã xuất trọn bộ ZIP: ${folderName}.zip`);
  } catch (err) {
    elements.previewWrapper.style.transform = originalTransform;
    switchDocTab(originalActiveTab);
    if (!wasModalOpen) {
      modal.classList.remove("open");
      modal.style.display = "";
      modal.style.visibility = "";
      modal.style.opacity = "";
    }
    if (overlay) overlay.classList.remove("active");
    console.error("ZIP export failed:", err);
    alert("Có lỗi khi tạo file ZIP: " + err.message);
  }
}

// ==========================================
// PROFILE MANAGER & RANDOM GENERATOR
// ==========================================
const RANDOM_PROFILES = [
  {
    name: "Dr. Brandon Hayes",
    subtitle: "Department of Humanities & Academic AP Lead",
    address: "Westminster District Campus\n15400 Bushard St\nMidway City, CA 92655",
    corpId: "WSD-EMP-8412",
    email: "bhayes@wsdk8.us",
    status: "Full-Time Verified Faculty"
  },
  {
    name: "Jennifer Tran, M.Ed.",
    subtitle: "Dual Language Immersion & STEM Specialist",
    address: "Cecil B. DeMille Elementary\n15400 Bushard St, Suite 204\nMidway City, CA 92655",
    corpId: "WSD-MVLA-3921",
    email: "jtran@wsdk8.us",
    status: "Certified Bilingual Faculty"
  },
  {
    name: "Prof. Michael Nguyen",
    subtitle: "Language Acquisition & Instructional Curriculum",
    address: "My Viet Language Academy\n15400 Bushard St\nMidway City, CA 92655",
    corpId: "WSD-MVLA-7714",
    email: "mnguyen@wsdk8.us",
    status: "Active Full-Time Regular Faculty"
  },
  {
    name: "Amanda Miller, Ed.D.",
    subtitle: "Academic Leadership & Special Education",
    address: "Tampa Regional Center\n157 Broad Lane, Floor 9\nTampa, FL 10703",
    corpId: "K12-FL-5029",
    email: "amanda.miller@stridelearning.com",
    status: "Full-Time Verified Faculty"
  },
  {
    name: "Robert Le, Ph.D.",
    subtitle: "Applied Mathematics & Advanced Placement",
    address: "Midway City Academic Office\n15400 Bushard St, Bldg B\nMidway City, CA 92655",
    corpId: "WSD-FAC-6192",
    email: "rle@wsdk8.us",
    status: "Tenured / Certificated Faculty"
  },
  {
    name: "Dr. Marcus Vance",
    subtitle: "Department of Science & Technology Lead",
    address: "Gatehouse Administration Center\n8115 Gatehouse Road\nFalls Church, VA 22042",
    corpId: "FCPS-FAC-4019",
    email: "mvance@fcps.edu",
    status: "Full-Time Certified Faculty"
  }
];

function initProfileManager() {
  if (elements.btnRandomProfile) {
    elements.btnRandomProfile.addEventListener("click", () => {
      const p = RANDOM_PROFILES[Math.floor(Math.random() * RANDOM_PROFILES.length)];
      state.facultyName = p.name;
      state.facultyInitials = computeInitials(p.name);
      state.facultySubtitle = p.subtitle;
      state.officeAddress = p.address;
      state.corporateId = p.corpId;
      state.email = p.email;
      state.meta4Value = p.status;
      state.avatarType = "initials";
      state.avatarImageUrl = "";

      populateFormFromState();
      updatePreview();
      showToast(`🎲 Đã tạo ngẫu nhiên: ${p.name}`);
    });
  }

  // Load saved profiles from localStorage
  refreshSavedProfilesDropdown();

  if (elements.btnSaveProfile) {
    elements.btnSaveProfile.addEventListener("click", () => {
      const defaultTitle = state.facultyName + " (" + (state.brandMain || "School") + ")";
      const profileName = prompt("Nhập tên để lưu hồ sơ này:", defaultTitle);
      if (profileName && profileName.trim()) {
        const saved = JSON.parse(localStorage.getItem("portal_saved_profiles") || "{}");
        saved[profileName.trim()] = JSON.parse(JSON.stringify(state));
        localStorage.setItem("portal_saved_profiles", JSON.stringify(saved));
        refreshSavedProfilesDropdown();
        showToast(`💾 Đã lưu hồ sơ "${profileName.trim()}"!`);
      }
    });
  }

  if (elements.selSavedProfiles) {
    elements.selSavedProfiles.addEventListener("change", (e) => {
      const key = e.target.value;
      if (!key) return;
      const saved = JSON.parse(localStorage.getItem("portal_saved_profiles") || "{}");
      if (saved[key]) {
        state = JSON.parse(JSON.stringify(saved[key]));
        populateFormFromState();
        updatePreview();
        showToast(`📂 Đã tải hồ sơ: ${key}`);
      }
    });
  }
}

function refreshSavedProfilesDropdown() {
  if (!elements.selSavedProfiles || !elements.savedProfilesWrapper) return;
  const saved = JSON.parse(localStorage.getItem("portal_saved_profiles") || "{}");
  const keys = Object.keys(saved);
  if (keys.length === 0) {
    elements.savedProfilesWrapper.style.display = "none";
    return;
  }
  elements.savedProfilesWrapper.style.display = "block";
  elements.selSavedProfiles.innerHTML = `<option value="">-- Chọn hồ sơ đã lưu (${keys.length}) --</option>`;
  keys.forEach(k => {
    const opt = document.createElement("option");
    opt.value = k;
    opt.textContent = k;
    elements.selSavedProfiles.appendChild(opt);
  });
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  populateFormFromState();
  updatePreview();
  setupListeners();
  initProfileManager();
  switchDocTab("letter");

  // Initial fit zoom calculation
  setTimeout(() => {
    const stageWidth = document.querySelector(".preview-stage").clientWidth - 60;
    if (stageWidth > 0) {
      applyZoom(Math.min(stageWidth / 1360, 0.75));
    }
  }, 100);
});
