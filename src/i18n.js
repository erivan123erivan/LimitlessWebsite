
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          link: {
            linkOne: "How it work ?",
            linkTwo: "Hosting",
            linkThree: "Faq",
            linkFour: "Help Center",
            linkOther: "Assurance",
            linkFive: "Language",
            linkSix: "Contact us",
          },
          Assurance:{
            text1:"Assurance for renters",
            text2:"1. Protection Coverage: Your vehicle is covered by our insurance policies in case of damages incurred during the rental period. The level of coverage is determined by the agreed-upon terms with the renter.",
            btn:"Continue to read",
          },
          faq: {
            noResults: "No Results",
            searchPlaceholder: "Search for a question",
            searchPlaceholderdeux: "Doha , New York , Dubai , Paris",
            searchPlaceholderTrois: "Audi , BMW , Mercedes , Toyota",
            title: "Help center",
            question1: "Is there a rating system for renters and owners?",
            answer1:
              "Yes, Limitles has a rating system where both renters and owners can provide feedback and rate their experiences.",
            question2: "Can I cancel a rental reservation if I change my mind?",
            answer2:
              "Users can cancel a rental reservation, but it is important to do so within the specified cancellation policy to avoid any penalties.",
            question3:
              "How does  Limitles ensure the safety and security of rented vehicles?",
            answer3:
              "Limitles verifies renters' identities and conducts driver history checks to help ensure the safety and security of your vehicle.",
            question4:
              "Are users in control of how much they charge for renting their cars?",
            answer4:
              "Yes, users have full control over the pricing of their rental cars.",
            question5: "Can users set their own rental prices?",
            answer5:
              "Yes, users have the freedom to set their own rental prices based on their preferences and the market demand.",
            question6:
              "Is there a limit on the number of weeks a car can be rented in a month?",
            answer6:
              "Yes, users can specify the maximum number of weeks they are willing to rent out their cars within a given month.",
            question7:
              "Are there any registration or listing fees for using  Limitles?",
            answer7:
              "No, there are no registration or listing fees for using  Limitles. It's free to sign up and list your cars.",
            question8: "What is  Limitles?",
            answer8:
              "Limitles is a car rental app where people can list their cars for rent and have assurance coverage for their vehicles.",
            question9:
              "Can I specify certain requirements for renters, such as age or driving experience?",
            answer9:
              "Yes, you can set specific requirements for renters, including age restrictions and driving experience criteria.",
            question10: "How do I receive payments for renting out my car?",
            answer10:
              "Payments for car rentals are processed securely through the app, and you will receive your earnings directly to your preferred payment method",
            question11: "How can I join  Limitles as a car owner or renter?",
            answer11:
              "To join  Limitles as a car owner or renter, simply download the app from your app store and follow the registration process to get started.",
            question12:
              "Can I provide additional services or amenities with my rented car?",
            answer12:
              "Yes, you can offer additional services or amenities with your rented car, such as GPS devices, child seats, or premium audio systems.",
            question13:
              "Are there any penalties for renters who damage or misuse the rented cars?",
            answer13:
              "Yes, renters are responsible for any damages or misuse of the cars they rent, and penalties may be applied accordingly.",
            question14:
              "Is  Limitles similar to other car rental companies like Gateround?",
            answer14:
              "Yes , Limitles operates as a car rental company, offering a platform for users to rent out their vehicles.",
            question15: "Can I list multiple cars on  Limitles?",
            answer15:
              "Yes, you can list multiple cars for rent on the  Limitles app.",
            question16: "What if I don't have the assurance plan?",
            answer16:
              "If you don't have the assurance plan, you will be responsible for any damages to your car while it is being rented.",
            question17:
              "How can I contact customer support if I have any issues or questions?",
            answer17:
              "You can contact customer support through the app or by emailing us",
            question18:
              "Can I rent a car through  Limitles if I don't own a vehicle?",
            answer18:
              "Yes, you can rent cars from other users on  Limitles even if you don't own a vehicle yourself.",
            question19:"How much money i can earn ?",
            answer19:"You can earn more than 900£ per month",
            question20:"How long it take to rent my car ?",
            answer20:"You can rent your car in 5 minutes but you will need  to send the documents first ",
          },
          home: {
            searchbtn: "Find a car",
            middletext: "Get the app",
            brandtext: "Best cars brands for you",
            text1: "Rent a car worldwide",
            text2: "Select your vehicule",
            paragraphNew:
              "Explore our wide selection of vehicles, easily accessible at your convenience. Discover the ideal car that suits both your requirements and personal style. ",
            paragraph2:
              "Sans contact, sans attente. Avec annulation gratuite, support client et accès aux véhicules 24/7, prolongation facile et plus encore. À la demande. ",
            text3: "Send your documents",
            paragraph3:
              "Complete the necessary document submission process to ensure compliance and approval for your booking. ",
            text4: "Request in seconds, rent in minutes. ",
            paragraph5: "Confirm your date",
            text5:
              "Choose your preferred pickup date to begin your rental period securely.",
            paragraph6: "Your Security, Our Priority",
            paragraph7:
              "Submit your necessary documents and personal information with ease, and you'll gain access to renting a car from fellow individuals. Our cutting-edge AI system takes care of generating rental contracts automatically, guaranteeing a secure and seamless rental experience. ",
            paragraph8: "Dowload your contract",
            testemonialtext:
              "Is the best app to rent a car , I'm very happy with the service",
            testemonialAuthor: "Renan",
            testemonialPosition: "Car renter",
            testemonialtextDeux:
              "I love this app , I can rent a car in 5 minutes",
            testemonialAuthorDeux: "Olivier",
            testemonialPositionDeux: "Car renter",
            testemonialtextTrois:
              "I use this app to rent my car , I'm very happy with the service. Most apps would have charged me a fee for canceling my reservation, but Limitles didn't charge me anything. I will definitely use this app again.",
            testemonialAuthorTrois: "Michael",
            testemonialPositionTrois: "Car renter",
            testemonialBigText: "Testemonial",
            testemonialPeopleText: "This app empower us , and help me pay my bills . i made 400£",
            testemonailPeopleAuthor: "Raphael",
            testemonialPeoplePosition: "Host of car",
            testetemonialPeopleTextdeux: "I love this app, becuase is very easy to publish my car",
            testemonialPeopleAuthordeux: "Jonathan",
            testemonialPeoplePositiondeux: "Host of car",
            testetemonialPeopleTexttrois: "This app is very easy to use , I can rent my car in 5 minutes",
            testemonialPeopleAuthortrois: "Maria",
            testemonialPeoplePositiontrois: "Host of car",
            paragraph9:
              "Once your booking is confirmed, download your rental contract, outlining the terms and conditions for your convenience and reference.",
            title6:
              "Join our thriving community of car enthusiasts, adventurers, and savvy travelers who have embraced the Qatar experience through our app. It's more than just car rental; it's a lifestyle.",
            paragraph10:
              "Earn Money While Your Car Rests: Does your car sit idle in your driveway? Transform it into a profitable asset! With our app, you can easily list your car for rent, allowing others to relish the joy of driving while you earn extra income. ",
            paragraph11:
              "Exclusive Access: Enjoy exclusive access to the finest car rental options in Qatar. Whether it's a sleek sedan for business, an SUV for family adventures, or a convertible for scenic coastal drives, we've got you covered. ",
            paragraph12:
              "24/7 Availability: Whether you're arriving at the airport in the dead of night or planning an impromptu road trip, our app stands ready to serve you 24/7, ensuring you never miss a moment.  ",
          },
          Hosting: {
            btn: "Let's go",
            btndeux: "Help center",
            hostingtext:
              "Got questions? Check out the frequently asked questions below.",
            hostingTitles: "FAQ",
            hosttext: "Hosting",
            text1:
              "Welcome to Limitles: Your Key to Earning and Managing Money with Your Car",
            text2:
              "Are you looking to make the most of your car while effortlessly managing your finances? Look no further than Limitles, the innovative app that opens the door to a world of possibilities. With Limitles, you can turn your vehicle into a money-making machine and take control of your finances with our integrated wallet feature.",
            text3: "Get Your Key",
            text4:
              "Start your journey by signing up with limitles. Once you're registered, you can obtain your virtual key. This key is your gateway to the world of car rentals and making money with your own car. ",
            text5: "Upload Your Driver License ",
            text6:
              "For added security and verification, renters will be required to upload their driver's license. This step ensures that every rental experience is safe and reliable. ",
            text7: "Earn Money with Your Car",
            text8:
              "With Limitles, your car is more than just a mode of transportation – it's a source of income. You have complete control over your rental terms and pricing. Earn money when you want, and how you want. Plus, our integrated wallet feature makes it simple to keep track of your earnings. ",
            text9: "Why Choose Limitles? ",
            text10: "Safety First",
            text11:
              "We prioritize safety and security, ensuring that renters and car owners have peace of mind throughout the entire rental process. ",
            text12: "User-Friendly Interface ",
            text13:
              "Our app is designed with you in mind. It's intuitive, easy to navigate, and ensures a seamless experience for both car owners and renters. ",
            text14: "Earning Potential ",
            text15:
              "Unlock the full potential of your vehicle and watch as it becomes a steady source of income. ",
            text16: "Financial Control: ",
            text17:
              "The Limitles wallet feature puts you in charge of your finances, making it easier to manage your earnings.",
          },
          Conditions:{
            text1:"Terms and Conditions",
            text2:"Thank you for using the Limitles App, a platform that enables people to rent their cars and make money. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your information when you use our services.",
            BtnText:"Continue to read"         
          },
          Contact: {
            text1: "Contact us",
            text2:
              "We are here to help you. You can send a email in carrentallimitles@gmail.com",
            text3: "Send us a message",
            text4: "Name",
            text5: "Email",
            text6: "Subject",
            text7: "Your Message",
            text8: "Send",
            text9: "Your email",
            text10: "Your message was sent",
          },
          App:{
            perDay:"£ Price per day",
          },
          Footer: {
            textassurance: "Assurance for renters",
            textassurancedeux: "Assurance for Hosters",
            text1: "Privacy Policy",
            text2: "Terms and Conditions",
            text3: "License agreement",
            text4: "IOS",
            text5: "Android",
            text11: "I lost my car ?",
            text6: "Where is the help center?",
            text7: "How to rent my car?",
            text8: "Careers",
            text9: "Contact us",
            text10: "About us",
            text14: "Hosting",
            text16: "Deals and discussions",
            text17: "Share a car",
            text18: "Can I list multiple cars on Limitles?",
            text19: "Limitles for designers and developers",
            text20: "Limitles in Doha",
          },
        },
      },
      ar: {
        translation: {
          link: {
            linkOne: "كيف يعمل؟",
            linkTwo: "استضافة",
            linkThree: "الأسئلة الشائعة",
            linkFour: "مركز المساعدة",
            linkOther: "ضمان",
            linkFive: "اللغة",
            linkSix: "اتصل بنا",
        },
        Assurance: {
            text1: "ضمان للمستأجرين",
            text2: "1. تغطية الحماية: يتم تغطية سيارتك بواسطة سياسات التأمين الخاصة بنا في حالة الأضرار التي تحدث خلال فترة الإيجار. يتم تحديد مستوى التغطية بناءً على الشروط المتفق عليها مع المستأجر.",
            btn: "المتابعة في القراءة",
        },        
          App:{
            perDay:"السعر لليوم بالجنيه الإسترليني",
        },    
        Contact: {
          text1: "اتصل بنا",
          text2: "نحن هنا لمساعدتك. يمكنك إرسال بريد إلكتروني إلى carrentallimitles@gmail.com",
          text3: "أرسل لنا رسالة",
          text4: "الاسم",
          text5: "البريد الإلكتروني",
          text6: "الموضوع",
          text7: "رسالتك",
          text8: "إرسال",
          text9: "بريدك الإلكتروني",
          text10: "تم إرسال رسالتك بنجاح",
      },          
      Footer: {
        textassurance: "ضمان للمستأجرين",
        textassurancedeux: "ضمان للمُضيفين",
        text1: "سياسة الخصوصية",
        text2: "الشروط والأحكام",
        text3: "اتفاقية الترخيص",
        text4: "IOS",
        text5: "أندرويد",
        text11: "فقدت سيارتي؟",
        text6: "أين مركز المساعدة؟",
        text7: "كيف يمكنني تأجير سيارتي؟",
        text8: "الوظائف",
        text9: "اتصل بنا",
        text10: "معلومات عنا",
        text14: "الاستضافة",
        text16: "الصفقات والمناقشات",
        text17: "شارك سيارة",
        text18: "هل يمكنني إدراج عدة سيارات في ليمتلس؟",
        text19: "ليمتلس للمصممين والمطورين",
        text20: "ليمتلس في الدوحة",
    },
    Hosting: {
      btn: "لنذهب",
      btndeux: "مركز المساعدة",
      hostingtext: "هل لديك أسئلة؟ تحقق من الأسئلة الشائعة أدناه.",
      hostingTitles: "الأسئلة الشائعة",
      hosttext: "الاستضافة",
      text1: "مرحبًا بك في ليمتلس: مفتاحك لكسب وإدارة الأموال مع سيارتك",
      text2: "هل تبحث عن استغلال أقصى قدر من سيارتك مع إدارة مالية بسهولة؟ لا تبحث أبعد من ليمتلس، التطبيق الابتكاري الذي يفتح الباب أمام عالم من الإمكانيات. مع ليمتلس، يمكنك تحويل سيارتك إلى آلة لصنع المال والسيطرة على أموالك باستخدام ميزة المحفظة المتكاملة لدينا.",
      text3: "احصل على مفتاحك",
      text4: "ابدأ رحلتك من خلال التسجيل في ليمتلس. بمجرد تسجيلك، يمكنك الحصول على مفتاحك الافتراضي. هذا المفتاح هو بوابتك إلى عالم تأجير السيارات وكسب المال من سيارتك الخاصة.",
      text5: "قم بتحميل رخصة القيادة الخاصة بك",
      text6: "من أجل الأمان والتحقق الإضافي، سيُطلب من المستأجرين تحميل رخصة القيادة الخاصة بهم. يضمن هذا الخطوة أن تكون كل تجربة تأجير آمنة وموثوقة.",
      text7: "كسب المال مع سيارتك",
      text8: "مع ليمتلس، تكون سيارتك أكثر من مجرد وسيلة نقل - إنها مصدر دخل. لديك السيطرة الكاملة على شروط الإيجار والتسعير. اربح المال عندما تريد، وكيف تريد. بالإضافة إلى ذلك، تجعل ميزة المحفظة المتكاملة لدينا من السهل تتبع أرباحك.",
      text9: "لماذا اختيار ليمتلس؟",
      text10: "السلامة أولاً",
      text11: "نحن نولي الأولوية للسلامة والأمان، مما يضمن أن لدى المستأجرين وأصحاب السيارات راحة البال طوال عملية التأجير بأكملها.",
      text12: "واجهة سهلة الاستخدام",
      text13: "تم تصميم تطبيقنا بمراعاة احتياجاتك. إنه سهل الاستخدام وسهل التنقل، مما يضمن تجربة سلسة لأصحاب السيارات والمستأجرين على حد سواء.",
      text14: "إمكانات الكسب",
      text15: "افتح الإمكانات الكاملة لسيارتك وشاهد كيف تصبح مصدرًا ثابتًا للدخل.",
      text16: "السيطرة المالية:",
      text17: "تمنحك ميزة المحفظة في ليمتلس السيطرة على أموالك، مما يجعل من السهل إدارة أرباحك.",
  },  
    Conditions:{
      text1:"الشروط والأحكام",
      text2:"شكرًا لاستخدام تطبيق ليمتلس، وهو منصة تمكن الأشخاص من استئجار سياراتهم وكسب المال. خصوصيتك مهمة بالنسبة لنا، ونحن ملتزمون بحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا، واستخدامنا، ومشاركتنا لمعلوماتك عند استخدام خدماتنا.",
      BtnText:"متابعة القراءة"
  },
  home: {
    searchbtn: "ابحث عن سيارة",
    middletext: "احصل على التطبيق",
    brandtext: "أفضل علامات السيارات لك",
    text1: "استئجار سيارة في جميع أنحاء العالم",
    text2: "اختر مركبتك",
    paragraphNew: "استكشف مجموعتنا الواسعة من السيارات، سهلة الوصول في أي وقت يناسبك. اكتشف السيارة المثالية التي تناسب متطلباتك وأسلوبك الشخصي.",
    paragraph2: "تصفح مخزوننا واختر السيارة التي تناسب احتياجاتك وتفضيلاتك الشخصية.",
    text3: "أرسل مستنداتك",
    paragraph3: "أكمل عملية تقديم الوثائق الضرورية لضمان الامتثال والموافقة على حجزك.",
    text4: "اطلب في ثوانٍ، استأجر في دقائق.",
    text5:"اختر تاريخ الاستلام المفضل لبدء فترة الإيجار الخاصة بك بأمان.",
    paragraph5: "قم بتأكيد تاريخ الاستلام المفضل لبدء فترة الإيجار الخاصة بك بأمان.",
    paragraph6: "أمانك، أماننا",
    paragraph7: "قدم وثائقك الضرورية ومعلوماتك الشخصية بسهولة، وستحصل على إمكانية استئجار سيارة من الأفراد الآخرين. يعتني نظام الذكاء الاصطناعي الرائد لدينا بإنشاء عقود الإيجار تلقائيًا، مما يضمن تجربة إيجار آمنة وسلسة.",
    paragraph8: "حمّل عقد الإيجار الخاص بك",
    testemonialtext: "أفضل تطبيق لاستئجار السيارات، أنا سعيد جدًا بالخدمة",
    testemonialAuthor: "رينان",
    testemonialPosition: "مستأجر سيارة",
    testemonialtextDeux: "أحب هذا التطبيق، يمكنني استئجار سيارة في 5 دقائق",
    testemonialAuthorDeux: "أوليفييه",
    testemonialPositionDeux: "مستأجر سيارة",
    testemonialtextTrois: "أستخدم هذا التطبيق لاستئجار سيارتي، أنا سعيد جدًا بالخدمة. كان معظم التطبيقات ستفرض علي رسومًا عند إلغاء حجزي، ولكن لم يفرض ليمتلس أي رسوم علي. سأستخدم هذا التطبيق مرة أخرى بالتأكيد.",
    testemonialAuthorTrois: "مايكل",
    testemonialPositionTrois: "مستأجر سيارة",
    testemonialBigText: "شهادة",
    testemonialPeopleText: "هذا التطبيق يمكننا ويساعدني في دفع فواتيري. جنيت 400 جنيه استرليني",
    testemonailPeopleAuthor: "رافاييل",
    testemonialPeoplePosition: "مضيف السيارة",
    testetemonialPeopleTextdeux: "أحب هذا التطبيق، لأنه من السهل جدًا نشر سيارتي",
    testemonialPeopleAuthordeux: "جوناثان",
    testemonialPeoplePositiondeux: "مضيف السيارة",
    testetemonialPeopleTexttrois: "هذا التطبيق سهل الاستخدام جدًا، يمكنني استئجار سيارتي في 5 دقائق",
    testemonialPeopleAuthortrois: "ماريا",
    testemonialPeoplePositiontrois: "مضيف السيارة",
    paragraph9: "بمجرد تأكيد حجزك، قم بتنزيل عقد الإيجار الخاص بك، الذي يحدد الشروط والأحكام لراحتك والرجوع إليه.",
    title6: "انضم إلى مجتمعنا المزدهر لهواة السيارات والمغامرين والمسافرين الذكيين الذين احتضنوا تجربة قطر من خلال تطبيقنا. إنها أكثر من مجرد تأجير سيارة؛ إنها نمط حياة.",
    paragraph10: "كسب المال أثناء استراحة سيارتك: هل تجلس سيارتك بدون استخدام في المدرج الخاص بك؟ حولها إلى أصل مربح! مع تطبيقنا، يمكنك إدراج سيارتك بسهولة للإيجار، مما يسمح للآخرين بالاستمتاع بمتعة القيادة بينما تحصل على دخل إضافي.",
    paragraph11: "وصول حصري: استمتع بوصول حصري إلى أفضل خيارات تأجير السيارات في قطر. سواء كانت سيارة سيدان أنيقة للعمل، أو سيارة دفع رباعي لمغامرات العائلة، أو سيارة كابريوليه للقيادة على السواحل الخلابة، فإننا نقدم لك كل ما تحتاجه.",
    paragraph12: "التوفر على مدار الساعة: سواء كنت تصل إلى المطار في وقت متأخر من الليل أو تخطط لرحلة على الطريق فجأة، يقدم تطبيقنا الخدمة على مدار الساعة لضمان عدم فوتك لحظة.",
},
faq: {
  noResults: "لا توجد نتائج",
  searchPlaceholder: "ابحث عن سؤال",
  searchPlaceholderdeux: "الدوحة، نيويورك، دبي، باريس",
  searchPlaceholderTrois: "أودي، بي إم دبليو، مرسيدس، تويوتا",
  title: "مركز المساعدة",
  question1: "هل هناك نظام تقييم للمستأجرين وأصحاب السيارات؟",
  answer1: "نعم، لديه ليمتلس نظام تقييم حيث يمكن لكل من المستأجرين وأصحاب السيارات تقديم ملاحظات وتقييم تجاربهم.",
  question2: "هل يمكنني إلغاء حجز للإيجار إذا غيرت رأيي؟",
  answer2: "يمكن للمستخدمين إلغاء حجز للإيجار، ولكن من المهم القيام بذلك ضمن سياسة الإلغاء المحددة لتجنب أي عقوبات.",
  question3: "كيف يضمن ليمتلس سلامة وأمان السيارات المستأجرة؟",
  answer3: "يتحقق ليمتلس من هويات المستأجرين ويجري فحوصات على تاريخ القيادة للمساعدة في ضمان سلامة وأمان سيارتك.",
  question4: "هل يتحكم المستخدمون في مقدار الرسوم التي يطلبونها لاستئجار سياراتهم؟",
  answer4: "نعم، يمتلك المستخدمون السيطرة الكاملة على تسعير سياراتهم للإيجار.",
  question5: "هل يمكن للمستخدمين تحديد أسعار إيجارهم الخاصة؟",
  answer5: "نعم، يمتلك المستخدمون حرية تحديد أسعار إيجارهم الخاصة استنادًا إلى تفضيلاتهم وطلب السوق.",
  question6: "هل هناك حد أقصى لعدد الأسابيع التي يمكن استئجار السيارة في الشهر؟",
  answer6: "نعم، يمكن للمستخدمين تحديد الحد الأقصى لعدد الأسابيع التي يرغبون في تأجير سياراتهم في شهر معين.",
  question7: "هل هناك رسوم تسجيل أو إدراج لاستخدام ليمتلس؟",
  answer7: "لا، لا توجد رسوم تسجيل أو إدراج لاستخدام ليمتلس. من الحر للتسجيل وإدراج سياراتك.",
  question8: "ما هو ليمتلس؟",
  answer8: "ليمتلس هو تطبيق لتأجير السيارات حيث يمكن للناس إدراج سياراتهم للإيجار والحصول على تغطية تأمين لسياراتهم.",
  question9: "هل يمكنني تحديد متطلبات معينة للمستأجرين مثل العمر أو خبرة القيادة؟",
  answer9: "نعم، يمكنك تحديد متطلبات محددة للمستأجرين، بما في ذلك قيود العمر ومعايير خبرة القيادة.",
  question10: "كيف يمكنني استلام المدفوعات عن استئجار سيارتي؟",
  answer10: "تتم معالجة مدفوعات استئجار السيارات بشكل آمن من خلال التطبيق، وسوف تتلقى أرباحك مباشرة إلى طريقة الدفع المفضلة لديك",
  question11: "كيف يمكنني الانضمام إلى ليمتلس كمالك للسيارة أو مستأجر؟",
  answer11: "للانضمام إلى ليمتلس كمالك للسيارة أو مستأجر، ما عليك سوى تنزيل التطبيق من متجر التطبيقات الخاص بك واتباع عملية التسجيل للبدء.",
  question12: "هل يمكنني تقديم خدمات إضافية أو وسائل راحة مع سيارتي المستأجرة؟",
  answer12: "نعم، يمكنك تقديم خدمات أو وسائل راحة إضافية مع سيارتك المستأجرة، مثل أجهزة الجي بي إس، مقاعد الأطفال، أو أنظمة الصوت الرئيسية.",
  question13: "هل هناك عقوبات للمستأجرين الذين يتسببون في أضرار أو سوء استخدام للسيارات المستأجرة؟",
  answer13: "نعم، يتحمل المستأجرون مسؤولية أي أضرار أو سوء استخدام للسيارات التي يستأجرونها، وقد تُفرض عقوبات وفقًا لذلك.",
  question14: "هل يشبه ليمتلس شركات تأجير السيارات الأخرى مثل جيت راوند؟",
  answer14: "نعم، ليمتلس يعمل كشركة تأجير سيارات، ويوفر منصة للمستخدمين لتأجير سياراتهم.",
  question15: "هل يمكنني إدراج سيارات متعددة على تطبيق ليمتلس؟",
  answer15: "نعم، يمكنك إدراج سيارات متعددة للإيجار على تطبيق ليمتلس.",
  question16: "ماذا لو لم يكن لدي خطة التأمين؟",
  answer16: "إذا لم يكن لديك خطة التأمين، ستكون مسؤولًا عن أي أضرار تتعرض لها سيارتك أثناء إيجارها.",
  question17: "كيف يمكنني الاتصال بخدمة العملاء إذا كان لدي أي مشاكل أو استفسارات؟",
  answer17: "يمكنك الاتصال بخدمة العملاء من خلال التطبيق أو عن طريق إرسال بريد إلكتروني إلينا",
  question18: "هل يمكنني استئجار سيارة من خلال ليمتلس إذا لم أمتلك مركبة؟",
  answer18: "نعم، يمكنك استئجار سيارات من مستخدمين آخرين على ليمتلس حتى إذا لم تكن تمتلك مركبة بنفسك.",
  question19: "كم يمكنني كسب المال؟",
  answer19: "يمكنك كسب أكثر من 900 جنيه إسترليني شهريًا",
  question20: "كم يستغرق تأجير سيارتي؟",
  answer20: "يمكنك تأجير سيارتك في 5 دقائق ولكن ستحتاج إلى إرسال الوثائق أولاً",
},


  
        
        },
      },
    },
  });

export default i18n;
