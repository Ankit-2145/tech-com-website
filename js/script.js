// change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// Get Date

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
console.log(date);

//show/hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

//close nav menu

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

//show/hide sidebar

const sidebar = document.querySelector(".sidebar");
const OpenBtn = document.querySelector("#open-btn");
const CloseBtn = document.querySelector("#close-btn");

OpenBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
  CloseBtn.style.display = "inline-block";
  OpenBtn.style.display = "none";
});

//close sidebar

const closeSidebar = () => {
  sidebar.style.display = "none";
  CloseBtn.style.display = "none";
  OpenBtn.style.display = "inline-block";
};

CloseBtn.addEventListener("click", closeSidebar);

//Academics sidebar content

function showContent(option) {
  const content = document.getElementById("content");

  if (option === "option1") {
    content.innerHTML = `<h2>What is BCA?</h2>
    <p>The full form of BCA is Bachelor's in Computer Application. BCA is a 3-year undergraduate degree
    programme that focuses on knowledge of the basics of computer application and software development. A
    BCA degree is considered to be at par with a BTech/BE degree in Computer Science or Information
    Technology. The degree helps interested students in setting up a sound academic base for an advanced
    career in Computer Applications. The course of BCA includes database management systems, operating
    systems, software engineering, web technology and languages such as C, C++, HTML, Java etc.</p>
    
    <small>Download the prospectus from below:</small><br>
            <a href="/docs/BCA-BBA-Prospectus.pdf" target="_blank" class="btn btn-secondary">Download Now</a>`;
  } else if (option === "option2") {
    content.innerHTML = `<h2>Eligibility for BCA</h2>
    <p>Candidates who have passed 10+2 examination (in any stream i.e. Science, Arts, Commerce, Vocational etc.) from H.P. Board/CBSE/ICSE or any other examination considered equivalent to 10+2, by the Himachal Pradesh University Shimla, with 40% marks (35% marks in case of SC/ST candidates) Note: Preference will be given to candidate who have 10+2 with mathematics as one of the subjects.
    OR
     Any examination of a Board/University/College/School in a Foreign Country recognized as equivalent for the purpose of eligibility by the Vice-Chancellor/Equivalence committee or on the recommendation of association of Indian University, with 40% marks (35% in case of SC/STcandidates).</p>
     <h2>Number of Seats</h2>
     <p><strong>Subsidies Seats 30 <br>
     Non-Subsidized Seats 30 <br> 
     Total Seats 60 </strong><br>
     Subsidized Seats: As per University rules 75% seats will be filled out of the candidates who have passed their 10+2 examination from the school situated in Himachal Pradesh irrespective of the Board. Remaining 25% seats will be filled on all India basis. Other reservation rules of H.P. University shall be applicable.</p>
     <h2>Age Limit</h2>
     <p>Maximum age limit for the admission to BCAcourse is 21 years for general category, 24 years for SC/ST category and 23 years for the st girl candidates as on 1 July of the year 2021.The Vice-Chancellor may permit age relaxation up to maximum of three months.</p>`;
  } else if (option === "option3") {
    content.innerHTML = `<h2>Basis of Admission</h2>
    <p>The admission will purely be on the basis of percentage of marks (rounded up to two decimal places) obtained in 10+2. If there is a tie
    then first, the percentage of marks (rounded up to two decimal places) obtained in matriculation will be considered, and second the
    candidates older in age will be given preference.</p>`;
  } else if (option === "option4") {
    content.innerHTML = `<h2>Training</h2>
    <p>One month short term training and minor project submission will be mandatory for each student after the examination of 1 to 5
    semester.
    </p>`;
  } else if (option === "option5") {
    content.innerHTML = `<h2>Schedule Of Examination</h2>
    <p>The pass percentage in each subject will be 40%<br>
    I) Theory Papers:
    For Regular students each paper will be of 100 marks (70 marks for End Semester Examination and 30 marks for Continuous Comprehensive
    Assessment) and duration of each paper will be 3 hours.<br>
    i) Continuous Comprehensive Assessment (CCA) accounting for 30% of the final grade that a student gets in a course; and<br>
    ii) End-Semester Examination (ESE) accounting for the remaining 70% of the final grade that the student gets in a course.
    Note:<br>
    1. A student will have to pass both the components (i.e.) CCAand ESE separately to become eligible to be declared successful in a course.<br>
    2. The ratio of Continuous Comprehensive Assessment (CCA) and End-Semester Examination (ESE) would remain unchanged (i.e. 30:70)
    for the students of the academic session admitted in 2019, 2020 and 2021 respectively.<br>
    Mid-Term (Minor) Test-There will be one mid-term test, to be conducted when approximately 2/3 of the syllabus has been covered. This mid-term
    test will be for 15 marks. Mid term test will be conducted by the college in consultation with the teacher.
    Note: Mid-term (minor) Test will be of 15 marks for the students of the academic sessions admitted in 2018, 2019 & 2020.respectively.
    Seminar/Assignment/Term Paper-The remaining 10 marks of the CCAwill be awarded on the basis of seminar/assignment/term paper etc. that
    the course teacher might give to the students.
    End-semester Examination (ESE): The remaining 70% of the final grade of the student in a course will be on the basis of an end-semester
    examination (ESE) that will be for three hours duration and will be covering the whole syllabus of the course.</p>`;
  } else if (option === "option6") {
    content.innerHTML = `<h2>Uniform</h2>
    <p>The student admitted to BCAcourse will have to wear the uniform as prescribed below:-<br>
    1. Steel Grey Trousers <br>2. Off White Shirt <br>3. Maroon Tie <br>4.Steel Grey Sweater <br>5. Navy Blue Blazer <br>6. White Socks <br>7. Black Shoes</p>`;
  } else if (option === "option7") {
    content.innerHTML = `<h2>Semester 1(1st Year)</h2>
    <p>In the first semester of your BCA program, you will be introduced to a diverse range of subjects that will lay the foundation for your studies in computer applications.<br> You will start with Mathematics-I (BCA0101), where you will learn essential mathematical concepts and techniques relevant to computer science. This will provide you with a solid mathematical base for your future programming and problem-solving endeavors.
    <br>
    Alongside Mathematics, you will also take Applied English (BCA0102), which aims to improve your English language skills in areas such as communication, writing, and comprehension. This will help you effectively express your thoughts and ideas both verbally and in written form, which is crucial for professional success.<br>
    
    Another key course is Computer Fundamentals (BCA0103), which will introduce you to the fundamental concepts of computers and their components. You will learn about computer architecture, software, operating systems, and computer networks. This course will give you a comprehensive understanding of the underlying principles and technologies that power modern computing.<br>
    
    The core programming course, C Programming (BCA0104), will be a focal point of your first semester. You will dive into the world of programming, learning the syntax, data types, control structures, and functions of the C programming language. Through practical exercises and lab sessions, you will develop coding skills and problem-solving abilities.<br>
    
    Simultaneously, you will also study Office Automation Tools (BCA0105), which will familiarize you with essential software tools used in office environments. You will gain hands-on experience with word processors, spreadsheets, presentation software, and email clients. This practical course will equip you with the necessary skills to efficiently handle various office tasks and improve productivity.<br>
    
    To reinforce your understanding of C programming and office automation tools, you will have corresponding lab sessions, namely C Programming Lab-I (BCA0104(P)) and Office Automation Tools Lab-II (BCA0105(P)). These labs will provide you with practical experience, allowing you to apply the theoretical knowledge gained in the classroom and develop your programming and office software proficiency.<br>
    
    Overall, your first semester will offer a well-rounded introduction to mathematics, English language skills, computer fundamentals, programming with C, and office automation tools. These foundational subjects will serve as the building blocks for your future academic and professional growth in the field of computer applications.</p>
  <style>
    table {
      font-family: Arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    th, td {
      text-align: left;
      padding: 8px;
    }

    th {
      background-color: #f2f2f2;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }
  </style>
  <h2>Detailed Course Outline For BCA(Semester 1)</h2>
  <table>
    <tr>
      <th>Paper Code</th>
      <th>Paper Title</th>
      <th>Credit</th>
      <th>ESE</th>
      <th>CCA</th>
      <th>Max. Marks</th>
      <th>Exam Duration Hours</th>
    </tr>
    <tr>
      <td>BCA0101</td>
      <td>Mathematics-I</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0102</td>
      <td>Applied English</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0103</td>
      <td>Computer Fundamentals</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0104</td>
      <td>C Programming</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0105</td>
      <td>Office Automation Tools</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0104(P)</td>
      <td>C Programming Lab-I</td>
      <td>3</td>
      <td>35</td>
      <td>15</td>
      <td>50</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0105(P)</td>
      <td>Office Automation Tools Lab-II</td>
      <td>3</td>
      <td>35</td>
      <td>15</td>
      <td>50</td>
      <td>3</td>
    </tr>
  </table>

  <small>Download the full syllabus from below:</small><br>
  <a href="/docs/syllabus_BCA_.pdf" target="_blank" class="btn btn-secondary">Download Now</a>
  <small>Download only the 1st semester syllabus from below:</small><br>
  <a href="/docs/Semester1.pdf" target="_blank" class="btn btn-tertiary">Download Now</a>
`;
  } else if (option === "option8") {
    content.innerHTML = `<h2>Semester 2(1st Year)</h2>
    <p>In the second semester of your BCA program, you will be introduced to a new set of subjects that will further enhance your understanding of computer applications. The first course,<br> Mathematics-II (BCA0201), will build upon the mathematical concepts covered in the previous semester. You will delve into advanced topics such as matrices, probability, statistics, and numerical methods, which are essential for various applications in computer science.<br>

    Communicative English (BCA0202) will continue to develop your English language skills, focusing on effective communication in different contexts. You will learn techniques for public speaking, presentations, and professional writing. This course aims to equip you with the necessary language proficiency to interact confidently in the workplace.<br>
    
    Digital Electronics (BCA0203) will introduce you to the fundamentals of digital circuits and systems. You will learn about logic gates, Boolean algebra, combinational and sequential circuits, and memory devices. This course provides the groundwork for understanding the design and implementation of digital systems in computer applications.<br>
    
    Data Structures (BCA0204) is a core course that explores the efficient organization and management of data. You will learn about different data structures such as arrays, linked lists, stacks, queues, trees, and graphs. Additionally, algorithms for searching, sorting, and manipulating data will be covered. Understanding data structures is crucial for optimizing program performance and solving complex computational problems.<br>
    
    Data Base Management System (BCA0205) focuses on the theory and practice of managing large-scale databases. You will study relational database concepts, entity-relationship modeling, SQL (Structured Query Language), normalization, and database administration. This course will enable you to design, query, and manage databases efficiently, which is essential in the field of computer applications.<br>
    
    To reinforce your theoretical knowledge, you will also engage in practical sessions. Data Structures Lab-III (BCA0204(P)) will provide hands-on experience in implementing and analyzing data structures using programming languages. Data Base Management System Lab-IV (BCA0205(P)) will offer practical exercises to apply your knowledge of database concepts and SQL in real-world scenarios.<br>
    
    The second semester builds upon the foundational concepts of the first semester, expanding your mathematical abilities, language skills, and knowledge of digital electronics, data structures, and database management. By the end of this semester, you will have gained a deeper understanding of these subjects, laying a strong groundwork for further specialization in computer applications.</p>
    <style>
    table {
      font-family: Arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    th, td {
      text-align: left;
      padding: 8px;
    }

    th {
      background-color: #f2f2f2;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }
  </style>
  <h2>Detailed Course Outline For BCA(Semester 2)</h2>
  <table>
    <tr>
      <th>Paper Code</th>
      <th>Paper Title</th>
      <th>Credit</th>
      <th>ESE</th>
      <th>CCA</th>
      <th>Max. Marks</th>
      <th>Exam Duration Hours</th>
    </tr>
    <tr>
      <td>BCA0201</td>
      <td>Mathematics-II</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0202</td>
      <td>Communicative English</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0203</td>
      <td>Digital Electronics</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0204</td>
      <td>Data Structures</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0205</td>
      <td>Data Base Management System</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0204(P)</td>
      <td> Data Structures Lab-III</td>
      <td>3</td>
      <td>35</td>
      <td>15</td>
      <td>50</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0205(P)</td>
      <td>Data Base ManagementSystem Lab-IV</td>
      <td>3</td>
      <td>35</td>
      <td>15</td>
      <td>50</td>
      <td>3</td>
    </tr>
  </table>

  <small>Download the full syllabus from below:</small><br>
  <a href="/docs/syllabus_BCA_.pdf" target="_blank" class="btn btn-secondary">Download Now</a>
  <small>Download only the 2nd semester syllabus from below:</small><br>
  <a href="/docs/Semester2.pdf" target="_blank" class="btn btn-tertiary">Download Now</a>
    `;
  } else if (option === "option9") {
    content.innerHTML = `<h2>Semester 3(2nd  Year)</h2>
    <p>In the third semester of your BCA program, you will continue to expand your knowledge and skills in various areas of computer applications.<br> Mathematics-III (BCA0301) will delve deeper into advanced mathematical topics, such as differential calculus, integral calculus, differential equations, and linear algebra. These mathematical concepts have significant applications in computer science, particularly in areas such as algorithms, optimization, and data analysis.<br>

    Business Practices & Management (BCA0302) will introduce you to the fundamentals of business management and practices within the context of the computer industry. You will learn about organizational structures, project management, marketing principles, and entrepreneurship. This course aims to provide you with a well-rounded understanding of business concepts that are relevant in the field of computer applications.<br>
    
    Computer Organization (BCA0303) focuses on the internal working of computer systems. You will study topics like CPU architecture, memory hierarchy, input/output systems, and assembly language programming. Understanding computer organization is crucial for optimizing program execution and developing efficient software solutions.<br>
    
    Object-Oriented Programming with C++ (BCA0304) is a core course that will introduce you to the principles and concepts of object-oriented programming. You will learn about classes, objects, inheritance, polymorphism, and other key features of C++. This course will enable you to design and implement complex software systems using object-oriented programming techniques.<br>
    
    Desktop Publishing & Designing (BCA0305) will familiarize you with the tools and techniques used in designing professional-looking documents and publications. You will learn about desktop publishing software, graphic design principles, typography, layout design, and visual communication. This course will equip you with the skills to create visually appealing and engaging documents for various purposes.<br>
    
    To reinforce your theoretical knowledge, you will also participate in practical sessions. Object-Oriented Programming with C++ Lab-V (BCA0304(P)) will provide you with hands-on experience in implementing object-oriented programming concepts using C++ programming language. Desktop Publishing & Designing Lab-VI (BCA0305(P)) will involve practical exercises to apply your skills in desktop publishing software and design principles.<br>
    
    By the end of the third semester, you will have gained advanced mathematical knowledge, an understanding of business practices and management, expertise in computer organization and architecture, proficiency in object-oriented programming with C++, and skills in desktop publishing and designing. These subjects will further enhance your capabilities as a computer applications professional, providing you with a solid foundation to pursue specialized areas of interest in the future.</p>
    <style>
    table {
      font-family: Arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    th, td {
      text-align: left;
      padding: 8px;
    }

    th {
      background-color: #f2f2f2;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }
  </style>
  <h2>Detailed Course Outline For BCA(Semester 3)</h2>
  <table>
    <tr>
      <th>Paper Code</th>
      <th>Paper Title</th>
      <th>Credit</th>
      <th>ESE</th>
      <th>CCA</th>
      <th>Max. Marks</th>
      <th>Exam Duration Hours</th>
    </tr>
    <tr>
      <td>BCA0301</td>
      <td>Mathematics-III</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0302</td>
      <td>Business Practices & Management</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0303</td>
      <td>Computer Organization</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0304</td>
      <td>Object Oriented Programming with C++</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0305</td>
      <td>Desktop Publishing & Designing</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0304(P)</td>
      <td>Object Oriented Prog. with C++ Lab-V</td>
      <td>3</td>
      <td>35</td>
      <td>15</td>
      <td>50</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0305(P)</td>
      <td>Desktop Publishing & Designing Lab-VI</td>
      <td>3</td>
      <td>35</td>
      <td>15</td>
      <td>50</td>
      <td>3</td>
    </tr>
  </table>

  <small>Download the full syllabus from below:</small><br>
  <a href="/docs/syllabus_BCA_.pdf" target="_blank" class="btn btn-secondary">Download Now</a>
  <small>Download only the 3rd semester syllabus from below:</small><br>
  <a href="/docs/Semester3.pdf" target="_blank" class="btn btn-tertiary">Download Now</a>
    `;
  } else if (option === "option10") {
    content.innerHTML = `<h2>Semester 4(2nd Year)</h2>
    <p>In the fourth semester of your BCA program, you will study a diverse range of subjects that will further enhance your understanding of computer applications and provide you with essential skills for the field.<br> Personnel Management (BCA0401) will introduce you to the principles and practices of managing human resources within an organization. You will learn about recruitment, training, employee motivation, performance management, and other aspects of personnel management.<br>

    Accounting (BCA0402) will provide you with an understanding of basic accounting principles and practices. You will learn about financial statements, bookkeeping, budgeting, and the fundamentals of financial management. This course will equip you with the necessary knowledge to interpret and analyze financial information in a business context.<br>
    
    System Analysis and Design (BCA0403) focuses on the process of analyzing, designing, and implementing computer-based information systems. You will learn about different system development methodologies, requirements gathering, system modeling, and design techniques. This course will prepare you to effectively analyze and design complex software systems.<br>
    
    Internet Tech. & Web Page Design (BCA0404) will introduce you to the fundamentals of internet technologies and web page design. You will learn about HTML, CSS, JavaScript, and other web technologies. This course will enable you to design and develop interactive and visually appealing websites.<br>
    
    Programming in Visual Basic (BCA0405) is a practical-oriented course that will teach you the essentials of programming using Visual Basic. You will learn about programming concepts, event-driven programming, user interface design, and database connectivity. This course will provide you with the skills to develop Windows-based applications using Visual Basic.<br>
    
    To reinforce your theoretical knowledge, you will also participate in practical lab sessions. Internet Tech. & Web Page Design Lab-VII (BCA0404(P)) will involve hands-on exercises to apply web page design concepts and develop web applications. Programming in Visual Basic Lab-VIII (BCA0405(P)) will provide practical experience in developing applications using Visual Basic.<br>
    
    By the end of the fourth semester, you will have gained knowledge in personnel management, accounting principles, system analysis and design, internet technologies, web page design, and programming in Visual Basic. These subjects will equip you with a well-rounded skill set, enabling you to understand and contribute effectively to various aspects of computer applications and software development.</p>
    <style>
    table {
      font-family: Arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    th, td {
      text-align: left;
      padding: 8px;
    }

    th {
      background-color: #f2f2f2;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }
  </style>
  <h2>Detailed Course Outline For BCA(Semester 4)</h2>
  <table>
    <tr>
      <th>Paper Code</th>
      <th>Paper Title</th>
      <th>Credit</th>
      <th>ESE</th>
      <th>CCA</th>
      <th>Max. Marks</th>
      <th>Exam Duration Hours</th>
    </tr>
    <tr>
      <td>BCA0401</td>
      <td>Personnel Management</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0402</td>
      <td>Accounting</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0403</td>
      <td>System Analysis and Design</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0404</td>
      <td>InternetTech.& Web Page Design</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0405</td>
      <td>Programming in Visual Basic</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0404(P)</td>
      <td>InternetTech.& Web Page Design Lab-VII</td>
      <td>3</td>
      <td>35</td>
      <td>15</td>
      <td>50</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0405(P)</td>
      <td>Programming in Visual Basic Lab-VIII</td>
      <td>3</td>
      <td>35</td>
      <td>15</td>
      <td>50</td>
      <td>3</td>
    </tr>
  </table>
  <small>Download the full syllabus from below:</small><br>
  <a href="/docs/syllabus_BCA_.pdf" target="_blank" class="btn btn-secondary">Download Now</a>
  <small>Download only the 4th semester syllabus from below:</small><br>
  <a href="/docs/Semester4.pdf" target="_blank" class="btn btn-tertiary">Download Now</a>`;
  } else if (option === "option11") {
    content.innerHTML = `<h2>Semester 5(3rd Year)</h2>
    <p>In the fifth semester of your BCA program, you will study a diverse set of subjects that will further enhance your knowledge and skills in computer applications.<br> Operating System (BCA0501) will provide you with a deep understanding of the fundamental concepts and principles of operating systems. You will learn about process management, memory management, file systems, and device management. This course will equip you with the knowledge to effectively manage and optimize computer systems.<br>

    E-Commerce (BCA0502) will introduce you to the concepts and practices of conducting business transactions over the internet. You will learn about e-commerce models, online payment systems, security issues, and emerging trends in e-commerce. This course will enable you to understand the opportunities and challenges of conducting business in the digital world.<br>
    
    Management Information System (BCA0503) focuses on the use of information technology in managing and supporting business operations. You will learn about the role of information systems in decision-making, database management, system development, and enterprise resource planning. This course will provide you with the knowledge to design and implement effective information systems to support organizational processes.<br>
    
    ASP.net Technologies (BCA0504) is a practical-oriented course that will introduce you to web development using the ASP.net framework. You will learn about server-side web programming, database connectivity, and creating dynamic web applications. This course will equip you with the skills to develop robust and interactive web solutions using ASP.net.<br>
    
    Computer Oriented Statistical Methods (BCA0505) focuses on the application of statistical methods and techniques in computer science. You will learn about data analysis, probability distributions, hypothesis testing, regression analysis, and statistical modeling. This course will enable you to apply statistical methods to analyze and interpret data in various computer-based applications.<br>
    
    To reinforce your theoretical knowledge, you will also participate in practical lab sessions. ASP.net Technologies Lab-IX (BCA0504(P)) will provide hands-on experience in developing web applications using ASP.net technologies. Computer Oriented Statistical Methods Lab-X (BCA0505(P)) will involve practical exercises to apply statistical methods and techniques using computer software.<br>
    
    By the end of the fifth semester, you will have gained a deeper understanding of operating systems, e-commerce principles, management information systems, ASP.net technologies, and computer-oriented statistical methods. These subjects will provide you with a strong foundation in crucial areas of computer applications, enabling you to design and develop efficient systems, leverage technology for business operations, and analyze data for informed decision-making.</p>
    <style>
    table {
      font-family: Arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    th, td {
      text-align: left;
      padding: 8px;
    }

    th {
      background-color: #f2f2f2;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }
  </style>
  <h2>Detailed Course Outline For BCA(Semester 5)</h2>
  <table>
    <tr>
      <th>Paper Code</th>
      <th>Paper Title</th>
      <th>Credit</th>
      <th>ESE</th>
      <th>CCA</th>
      <th>Max. Marks</th>
      <th>Exam Duration Hours</th>
    </tr>
    <tr>
      <td>BCA0501</td>
      <td>Operating System</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0502</td>
      <td>E-Commerce</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0503</td>
      <td>Management Information System</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0504</td>
      <td>ASP.net Technologies</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0505</td>
      <td>Computer Oriented Statistical Methods</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0504(P)</td>
      <td>ASP.net Technologies Lab-IX</td>
      <td>3</td>
      <td>35</td>
      <td>15</td>
      <td>50</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0505(P)</td>
      <td>Computer Oriented Statistical Methods Lab-X</td>
      <td>3</td>
      <td>35</td>
      <td>15</td>
      <td>50</td>
      <td>3</td>
    </tr>
  </table>
  <small>Download the full syllabus from below:</small><br>
  <a href="/docs/syllabus_BCA_.pdf" target="_blank" class="btn btn-secondary">Download Now</a>
  <small>Download only the 5th semester syllabus from below:</small><br>
  <a href="/docs/Semester5.pdf" target="_blank" class="btn btn-tertiary">Download Now</a>`;
  } else if (option === "option12") {
    content.innerHTML = `<h2>Semester 6(3rd Year)</h2>
    <p>In the sixth semester of your BCA program, you will study a set of subjects that will further enhance your understanding and skills in computer applications.<br> Computer Network (BCA0601) will introduce you to the fundamental concepts and principles of computer networks. You will learn about network architectures, protocols, network security, and network administration. This course will provide you with the knowledge to design, implement, and manage computer networks.<br> 

    Numerical Methods (BCA0602) focuses on numerical techniques and algorithms used to solve mathematical problems computationally. You will learn about approximation methods, numerical integration, solving linear and nonlinear equations, and interpolation. This course will equip you with the skills to apply numerical methods to solve real-world problems in computer science.<br> 
    
    Multimedia Technology (BCA0603) will introduce you to the principles and tools used in creating multimedia content. You will learn about multimedia authoring, graphics and animation, audio and video processing, and multimedia compression techniques. This course will enable you to design and develop interactive multimedia applications.<br> 
    
    Computer Graphics (BCA0604) is a practical-oriented course that will teach you the fundamentals of computer graphics. You will learn about 2D and 3D graphics algorithms, rendering techniques, modeling, and animation. This course will equip you with the skills to create visually appealing and realistic computer-generated graphics.<br> 
    
    Software Engineering (BCA0605) focuses on the principles and practices of software development. You will learn about software development life cycle, requirements engineering, software design, testing, and project management. This course will provide you with the knowledge and methodologies to develop high-quality software solutions.<br> 
    
    To reinforce your theoretical knowledge, you will also participate in practical lab sessions. Computer Graphics Lab-XI (BCA0604(P)) will provide hands-on experience in implementing computer graphics algorithms and techniques. The Major Project (BCA0605(P)) will be a significant undertaking where you will work on a real-world software development project, applying the concepts and skills you have acquired throughout your BCA program.<br> 
    
    By the end of the sixth semester, you will have gained knowledge and skills in computer networking, numerical methods, multimedia technology, computer graphics, and software engineering. These subjects will equip you with a comprehensive understanding of important aspects of computer applications and provide you with the necessary skills to design and develop software solutions, work with multimedia content, and manage computer networks. The major project will allow you to apply your knowledge in a practical setting and showcase your abilities as a computer applications professional.</p>
    <style>
    table {
      font-family: Arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    th, td {
      text-align: left;
      padding: 8px;
    }

    th {
      background-color: #f2f2f2;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }
  </style>
  <h2>Detailed Course Outline For BCA(Semester 6)</h2>
  <table>
    <tr>
      <th>Paper Code</th>
      <th>Paper Title</th>
      <th>Credit</th>
      <th>ESE</th>
      <th>CCA</th>
      <th>Max. Marks</th>
      <th>Exam Duration Hours</th>
    </tr>
    <tr>
      <td>BCA0601</td>
      <td>Computer Network</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0602</td>
      <td>Numerical Methods</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0603</td>
      <td>Multimedia Technology</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0604</td>
      <td>Computer Graphics</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0605</td>
      <td>Software Engineering</td>
      <td>4</td>
      <td>70</td>
      <td>30</td>
      <td>100</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0604(P)</td>
      <td>Computer Graphics Lab-XI</td>
      <td>3</td>
      <td>35</td>
      <td>15</td>
      <td>50</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BCA0605(P)</td>
      <td>Major Project</td>
      <td>3</td>
      <td>35</td>
      <td>15</td>
      <td>50</td>
      <td>3</td>
    </tr>
  </table>
  <small>Download the full syllabus from below:</small><br>
  <a href="/docs/syllabus_BCA_.pdf" target="_blank" class="btn btn-secondary">Download Now</a>
  <small>Download only the 6th semester syllabus from below:</small><br>
  <a href="/docs/Semester6.pdf" target="_blank" class="btn btn-tertiary">Download Now</a>`;
  }
}
