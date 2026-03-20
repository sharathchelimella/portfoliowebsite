import { mutation } from "./_generated/server";

export const run = mutation({
  args: {},
  handler: async (ctx) => {
    // 1. Hero
    const existingHero = await ctx.db.query("hero").first();
    const heroData = {
      firstName: "Chelimella",
      lastName: "Sharath Kumar",
      badgeText: "Available for opportunities",
      typingStrings: ["Data Analyst", "Python & SQL Developer", "Machine Learning Enthusiast"],
      description: "Data Analyst intern with experience in Python, Power BI, and Machine Learning. Passionate about uncovering actionable insights from complex datasets.",
      linkedin: "https://www.linkedin.com/in/sharathchelimella/",
      github: "https://github.com/sharathchelimella",
      email: "sharathreddychellimela@gmail.com",
    };
    if (existingHero) { await ctx.db.patch(existingHero._id, heroData); }
    else { await ctx.db.insert("hero", heroData); }

    // 2. About
    const existingAbout = await ctx.db.query("about").first();
    const aboutData = {
      brandName: "Sharath Chelimella",
      heading: "Passionate about Data & Analytics",
      bio1: "I am a Data Analyst intern proficient in Python, SQL, and Power BI. I excel at analyzing and processing large datasets, performing exploratory data analysis, and building interactive dashboards to improve decision-making.",
      bio2: "With soft skills in problem-solving and decision-making, I enjoy developing predictive models and data-driven reports that support strategic business recommendations.",
      location: "India",
      degree: "B.Tech CSE",
      focus: "Data Science & ML",
      passion: "Problem Solving",
      photoUrl: "",
    };
    if (existingAbout) { await ctx.db.patch(existingAbout._id, aboutData); }
    else { await ctx.db.insert("about", aboutData); }

    // 3. Contact
    const existingContact = await ctx.db.query("contact").first();
    const contactData = {
      email: "sharathreddychellimela@gmail.com",
      phone: "+91-9848995367",
      location: "India",
      linkedin: "https://www.linkedin.com/in/sharathchelimella/",
      github: "https://github.com/sharathchelimella",
    };
    if (existingContact) { await ctx.db.patch(existingContact._id, contactData); }
    else { await ctx.db.insert("contact", contactData); }

    // 4. Footer
    const existingFooter = await ctx.db.query("footer").first();
    const footerData = {
      brandName: "Sharath Chelimella",
      subtitle: "Data Analyst Intern & Python Developer",
      linkedin: "https://www.linkedin.com/in/sharathchelimella/",
      github: "https://github.com/sharathchelimella",
      email: "sharathreddychellimela@gmail.com",
      location: "India"
    };
    if (existingFooter) { await ctx.db.patch(existingFooter._id, footerData); }
    else { await ctx.db.insert("footer", footerData); }

    // Clear Arrays Before Insert
    const tablesToClear = ["skills", "projects", "training_experience", "certificates", "education"];
    for (const table of tablesToClear) {
      const all = await ctx.db.query(table).collect();
      for (const item of all) {
        await ctx.db.delete(item._id);
      }
    }

    // Insert Skills
    const skills = [
      { name: "Python", category: "Languages", level: "Intermediate", order: 1 },
      { name: "Java", category: "Languages", level: "Intermediate", order: 2 },
      { name: "SQL", category: "Languages", level: "Intermediate", order: 3 },
      { name: "JavaScript", category: "Languages", level: "Intermediate", order: 4 },
      { name: "HTML and CSS", category: "Frameworks", level: "Intermediate", order: 5 },
      { name: "Scikit-learn", category: "Frameworks", level: "Intermediate", order: 6 },
      { name: "MySQL", category: "Tools/Platforms", level: "Intermediate", order: 7 },
      { name: "Jupyter Notebook", category: "Tools/Platforms", level: "Intermediate", order: 8 },
      { name: "Pandas", category: "Data Science", level: "Intermediate", order: 9 },
      { name: "NumPy", category: "Data Science", level: "Intermediate", order: 10 },
      { name: "Matplotlib", category: "Data Science", level: "Intermediate", order: 11 },
      { name: "Seaborn", category: "Data Science", level: "Intermediate", order: 12 },
      { name: "Power BI", category: "Data Science", level: "Intermediate", order: 13 },
      { name: "Data Cleaning", category: "Data Science", level: "Intermediate", order: 14 },
      { name: "Predictive Modeling", category: "Data Science", level: "Intermediate", order: 15 },
      { name: "Problem-Solving", category: "Soft Skills", level: "Intermediate", order: 16 },
      { name: "Decision-Making", category: "Soft Skills", level: "Intermediate", order: 17 },
      { name: "Time-Management", category: "Soft Skills", level: "Intermediate", order: 18 }
    ];
    for (const s of skills) { await ctx.db.insert("skills", s); }

    // Insert Projects
    const projects = [
      { 
        title: "Multi-Disease Prediction System", 
        description: "Built a Multi-Disease Prediction System using Machine Learning algorithms (Logistic Regression, Random Forest, SVM) to classify Diabetes, Heart Disease, and Parkinson’s Disease from patient datasets. Performed data preprocessing, feature engineering, and model evaluation using Accuracy, Precision, Recall, F1-Score, and ROC-AUC. Developed and deployed a web interface for real-time disease prediction.",
        technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Machine Learning"],
        order: 1
      },
      { 
        title: "Supply Chain and Inventory Dashboard", 
        description: "Designed an interactive Supply Chain and Inventory Dashboard to track stock levels, supplier performance, order status, and demand trends for better business decision-making. Performed data cleaning, aggregation, and KPI analysis. Implemented data visualizations such as inventory turnover, reorder alerts, demand forecasting trends, and supplier lead-time analysis.",
        technologies: ["Power BI", "Python", "Pandas", "SQL", "Excel", "Data Visualization"],
        order: 2
      }
    ];
    for (const p of projects) { await ctx.db.insert("projects", p); }

    // Insert Training_Experience
    const training = [
      {
        title: "Data Analyst Intern",
        organization: "Unified Mentor Pvt Ltd",
        description: "Analyzed and processed large company datasets using Python (Pandas, NumPy), data cleaning, transformation, and exploratory data analysis (EDA). Developed and automated interactive Power BI dashboards and Python-based visualizations. Built and evaluated predictive models.",
        startDate: "Oct' 25",
        endDate: "Present",
        type: "Experience",
        order: 1
      },
      {
        title: "Java and MySQL: Application Development",
        organization: "Lovely Professional University",
        description: "Gained hands-on training through a Java Development Program, working with Java, JDBC, MySQL, and Swing to build end-to-end applications. Implemented database-integrated Java Swing applications using object-oriented design. Strengthened full-stack integration capabilities.",
        startDate: "Jul' 25",
        endDate: "Jul' 25",
        type: "Training",
        order: 2
      }
    ];
    for (const t of training) { await ctx.db.insert("training_experience", t); }

    // Insert Certificates
    const certs = [
      { title: "SQL", issuer: "Hacker Rank", issuedDate: "Nov' 25", order: 1 },
      { title: "Introduction to Internet of Things", issuer: "NPTEL", issuedDate: "Oct' 25", order: 2 },
      { title: "Data Analytics Job Simulation", issuer: "Deloitte", issuedDate: "Sep' 25", order: 3 },
      { title: "Build Generative AI Apps and Solutions with No-Code Tools", issuer: "Udemy", issuedDate: "Aug' 25", order: 4 },
      { title: "Attained 5★ in SQL", issuer: "HackerRank", issuedDate: "Jan' 26", order: 5 },
      { title: "Secured 4★ in Java", issuer: "HackerRank", issuedDate: "Dec' 25", order: 6 }
    ];
    for (const c of certs) { await ctx.db.insert("certificates", c); }

    // Insert Education
    const education = [
      {
        degree: "Bachelor of Technology - Computer Science and Engineering",
        institution: "Lovely Professional University",
        location: "Punjab, India",
        startYear: "Aug'23",
        endYear: "Present",
        grade: "7.08 CGPA",
        order: 1
      },
      {
        degree: "Intermediate",
        institution: "Narayana Junior College",
        location: "Hyderabad, Telangana",
        startYear: "Mar' 21",
        endYear: "Mar' 23",
        grade: "95.4%",
        order: 2
      },
      {
        degree: "Matriculation",
        institution: "Ekashila High School",
        location: "Warangal, Telangana",
        startYear: "Mar'20",
        endYear: "Mar' 21",
        grade: "9.8 CGPA",
        order: 3
      }
    ];
    for (const e of education) { await ctx.db.insert("education", e); }
    
    return "Successfully seeded data!";
  }
});
