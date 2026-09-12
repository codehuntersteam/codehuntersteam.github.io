// Database of Topics written in Novel/Story style + Short Revision Notes
const storyDatabase = {
    physics: {
        title: "Calculus in Motion: समय के सूक्ष्म क्षण की गति",
        subject: "Physics - Classical Mechanics",
        novelContent: `
            <p>रोहन हाईवे पर अपनी गाड़ी चला रहा था। स्पीडोमीटर 60 km/hr दिखा रहा था। उसने अपने बगल में बैठे प्रोफेसर शास्त्री से मुस्कुराते हुए कहा, <em>"सर, 60 की स्पीड सुरक्षित है।"</em></p>
            <p>प्रोफेसर ने खिड़की से बाहर देखा और शांत आवाज़ में पूछा, <em>"रोहन, क्या तुम सच में पिछले 1 घंटे से लगातार 60 किमी प्रति घंटे की रफ्तार से ही चल रहे हो? बीच में जो लाल सिग्नल आया था, क्या तब भी रफ्तार 60 थी?"</em></p>
            <p>रोहन झिझक गया, <em>"नहीं सर, तब तो गाड़ी रुकी हुई थी। यह 60 तो पूरी यात्रा की औसत चाल (Average Velocity) है।"</em></p>
            <div class="dialogue">"तो फिर ठीक उसी पल, जब हमने सिग्नल पार किया था, तुम्हारी गति क्या थी? केवल उस एक 'सूक्ष्म पल' (Instant) में?" - प्रोफेसर शास्त्री।</div>
            <p>रोहन चुप हो गया। एक बिंदु का समय... जहाँ समय परिवर्तन (Δt) लगभग शून्य के बराबर पहुँच जाए! प्रोफेसर शास्त्री ने डैशबोर्ड पर हाथ रखकर समझाया, <em>"यही रहस्य है **Differentiation (अवकलन)** का! जब तुम पूरे सफर की बात करते हो, तो वह 'औसत' है। लेकिन जब तुम किसी एक जीवित, बहते हुए पल (Instant) की गति मापते हो, तो तुम $\\Delta t \\to 0$ की तरफ बढ़ रहे होते हो। यही है $\\frac{dx}{dt}$।"</em></p>
            <p>रोहन की आँखें चमक उठीं। उसने महसूस किया कि कैलकुलस गणित का कोई सूखा फार्मूला नहीं, बल्कि बहते हुए समय का एक जीवित चित्र है जो दिखाता है कि प्रकृति हर सूक्ष्म पल में कैसे बदल रही है!</p>
        `,
        notesContent: `
            <div class="notes-card">
                <h3>⚡ Fast Revision: Instantaneous Velocity & Calculus</h3>
                <ul>
                    <li><strong>Average Velocity ($V_{avg}$):</strong> Total Displacement / Total Time interval $(\frac{\Delta x}{\Delta t})$.</li>
                    <li><strong>Instantaneous Velocity ($V$):</strong> Velocity at a specific instant.</li>
                    <li><strong>Formula:</strong> $v = \lim_{\Delta t \to 0} \frac{\Delta x}{\Delta t} = \frac{dx}{dt}$</li>
                    <li><strong>Key Insight:</strong> Differentiation allows us to calculate rate of change at an infinitesimal point of time.</li>
                </ul>
            </div>
        `
    },

    maths: {
        title: "The Phantom Dimension: काल्पनिक संख्या (Complex Number $i$)",
        subject: "Mathematics - Algebra",
        novelContent: `
            <p>गणित की कक्षा में शांति थी। ब्लैकबोर्ड पर लिखा था: $x^2 = -1$। प्रोफेसर वर्मा ने पूरी क्लास की तरफ देखा। <em>"क्या कोई ऐसी संख्या है जिसे खुद से गुणा करें तो उत्तर ऋणात्मक (-) आ जाए?"</em></p>
            <p>आर्यन ने हाथ उठाया, <em>"सर, पॉजिटिव को पॉजिटिव से गुणा करो तो पॉजिटिव आता है, और नेगेटिव को नेगेटिव से करो तो भी पॉजिटिव ही बनता है! ऐसी कोई वास्तविक संख्या नहीं हो सकती।"</em></p>
            <p>प्रोफेसर वर्मा मुस्कुराए, <em>"बिल्कुल सही! हमारी असली दुनिया की 'नंबर लाइन' पर ऐसी कोई जगह नहीं है। लेकिन क्या होगा अगर हम उस नंबर लाइन से बाहर निकलकर 90-डिग्री ऊपर हवा में एक नई दिशा बना दें?"</em></p>
            <p>उन्होंने हवा में एक रेखा खींची, <em>"मान लो एक काल्पनिक इकाई है — **$i$ (iota)**, जहाँ $i = \sqrt{-1}$। यह कोई जादू नहीं है, यह तो संख्या रेखा को 90-डिग्री घुमाने (Rotate) का एक ऑपरेटर है!"</em></p>
            <div class="dialogue">"यदि तुम 1 को $i$ से गुणा करते हो, तुम 90° घूम जाते हो। फिर से $i$ से गुणा करो, तुम फिर 90° घूमकर -1 पर पहुँच जाते हो! इसीलिए $i \times i = -1$।"</div>
            <p>आर्यन ने अपनी कॉपी में देखा। अचानक गणित का वह डरावना सिंबल $\sqrt{-1}$ उसे एक अदृश्य आयाम का दरवाज़ा दिखने लगा, जो पूरी इलेक्ट्रिकल इंजीनियरिंग और क्वांटम फिजिक्स का आधार था!</p>
        `,
        notesContent: `
            <div class="notes-card">
                <h3>⚡ Fast Revision: Imaginary Numbers ($i$)</h3>
                <ul>
                    <li><strong>Definition:</strong> $i = \sqrt{-1}$, hence $i^2 = -1$.</li>
                    <li><strong>Geometric Meaning:</strong> Multiplying by $i$ represents a 90-degree anti-clockwise rotation on the Complex Plane.</li>
                    <li><strong>Complex Number Form:</strong> $Z = a + ib$ (where $a$ = Real part, $b$ = Imaginary part).</li>
                    <li><strong>Applications:</strong> AC Circuit Analysis, Quantum Physics, Signal Processing.</li>
                </ul>
            </div>
        `
    },

    chemistry: {
        title: "The Dance of Electrons: केमिकल बॉन्डिंग और रेजोनेंस",
        subject: "Chemistry - Molecular Structure",
        novelContent: `
            <p>बेंजीन ($C_6H_6$) का अणु एक गोल मेज पर बैठे 6 दोस्तों की तरह था। हर कार्बन परमाणु के पास एक अतिरिक्त इलेक्ट्रॉन था। वे भ्रमित थे कि सिंगल बॉन्ड बनाएँ या डबल बॉन्ड।</p>
            <p>पहला कार्बन बोला, <em>"अगर मैं अपने दाहिने पड़ोसी से डबल बॉन्ड बनाता हूँ, तो मेरा बायाँ पड़ोसी अकेला महसूस करेगा।"</em></p>
            <p>अचानक रसायन-शास्त्री लिनस पॉलिंग ने कमरे में प्रवेश किया और बोले, <em>"तुम सब गलत सोच रहे हो! इलेक्ट्रॉन कोई पत्थर नहीं हैं जो एक ही जगह रुके रहें। वे तो तरंगे (Waves) हैं।"</em></p>
            <div class="dialogue">"इलेक्ट्रॉनों को फिक्स मत करो। उन्हें पूरे रिंग में आज़ादी से नाचने दो! इसे ही Resonance (अनुनाद) कहते हैं।"</div>
            <p>और फिर एक चमत्कार हुआ। इलेक्ट्रॉन इतने तेज़ घूम और फ़ैल गए कि बेंजीन का कोई एक फिक्स स्ट्रक्चर बचा ही नहीं। वह एक बादलों जैसा रिंग बन गया। इस 'डांस' ने अणु को इतनी स्थिरता (Stability) दी कि वह अजेय बन गया। छात्रों को समझ आ गया कि केमिस्ट्री फॉर्मूलों से नहीं, स्टेबिलिटी की भावना से चलती है।</p>
        `,
        notesContent: `
            <div class="notes-card">
                <h3>⚡ Fast Revision: Resonance & Chemical Bonding</h3>
                <ul>
                    <li><strong>Resonance:</strong> Delocalization of $\pi$-electrons within a molecule where a single Lewis structure fails.</li>
                    <li><strong>Resonance Hybrid:</strong> The actual structure representing a blend of all canonical forms.</li>
                    <li><strong>Key Effect:</strong> Increases overall stability and decreases chemical reactivity (e.g., Benzene).</li>
                </ul>
            </div>
        `
    },

    cs: {
        title: "The Mirror in the Mirror: Recursion (पुनरावृत्ति)",
        subject: "Computer Science & Algorithms",
        novelContent: `
            <p>अयान एक अंधेरे कमरे में दो आमने-सामने रखे शीशों के बीच खड़ा था। वह जितने आगे देखता, उसे अपनी ही अनगिनत छवियाँ (Images) दिखाई देतीं — एक के अंदर दूसरी, उसके अंदर तीसरी...</p>
            <p>उसके गुरु ने पीछे से कहा, <em>"अयान, अगर मैं तुमसे कहूँ कि इस अनंत कतार में अंतिम आदमी का नाम पता करो, तो तुम क्या करोगे?"</em></p>
            <p>अयान ने कहा, <em>"मैं अपने आगे वाले से पूछूँगा, वह अपने आगे वाले से पूछेगा..."</em></p>
            <div class="dialogue">"और यह प्रक्रिया कब रुकेगी?" - गुरु। <br>"जब तक हम उस अंतिम आदमी तक न पहुँच जाएँ जहाँ कोई और दर्पण नहीं बचा है! (Base Condition)"</div>
            <p>गुरु ने मुस्कुराते हुए कंप्यूटर स्क्रीन चालू की: <em>"यही **Recursion** है! जब एक फंक्शन खुद को ही कॉल करता है एक छोटी समस्या के साथ। लेकिन अगर तुम 'Base Case' (रुकने की शर्त) नहीं लगाओगे, तो मेमोरी की स्टैक (Stack) भर जाएगी और तुम्हारा प्रोग्राम क्रैश (Stack Overflow) हो जाएगा!"</em></p>
        `,
        notesContent: `
            <div class="notes-card">
                <h3>⚡ Fast Revision: Recursion in Programming</h3>
                <ul>
                    <li><strong>Definition:</strong> A programming concept where a function calls itself directly or indirectly.</li>
                    <li><strong>Two Essential Parts:</strong>
                        1. <em>Base Case:</em> The terminating condition to stop recursion.
                        2. <em>Recursive Step:</em> Calling the function with a smaller sub-problem.</li>
                    <li><strong>Risk:</strong> Without a Base Case, it causes a <code>StackOverflowError</code>.</li>
                </ul>
            </div>
        `
    },

    economics: {
        title: "The Invisible Hand: माँग की लोच (Demand Elasticity)",
        subject: "Economics - Microeconomics",
        novelContent: `
            <p>रामपुर गाँव में केवल दो दुकानें थीं — एक जीवन रक्षक दवाइयों की और दूसरी महँगी ब्रांडेड घड़ियों की।</p>
            <p>एक दिन अकाल पड़ा और दोनों दुकानदारों ने अपने सामान के दाम 50% बढ़ा दिए।</p>
            <p>दवा की दुकान पर भीड़ कम नहीं हुई। लोग अपनी ज़मीन बेचकर भी दवा खरीद रहे थे। लेकिन घड़ियों की दुकान सूनसान हो गई!</p>
            <p>अर्थशास्त्र के प्रोफेसर ने गाँव के बच्चों को समझाते हुए कहा, <em>"देखो, दवा जीवन की ज़रूरत है, इसका कोई विकल्प नहीं है। इसलिए इसकी माँग **Inelastic (लोचहीन)** है — दाम कितना भी बढ़े, माँग कम नहीं होगी।"</em></p>
            <div class="dialogue">"दूसरी तरफ, ब्रांडेड घड़ी एक विलासिता है। इसके बिना काम चल सकता है। इसीलिए इसकी माँग **Highly Elastic (लोचदार)** है!"</div>
            <p>छात्रों ने समझा कि बाज़ार केवल पैसों का लेन-देन नहीं है, बल्कि मानव मनोविज्ञान और ज़रूरतों का प्रतिबिंब है।</p>
        `,
        notesContent: `
            <div class="notes-card">
                <h3>⚡ Fast Revision: Price Elasticity of Demand</h3>
                <ul>
                    <li><strong>Price Elasticity ($E_d$):</strong> % change in Quantity Demanded / % change in Price.</li>
                    <li><strong>Inelastic Demand ($E_d < 1$):</strong> Necessities (e.g., Medicines, Salt). Price changes have little impact on demand.</li>
                    <li><strong>Elastic Demand ($E_d > 1$):</strong> Luxury items. Small price increase leads to significant drop in demand.</li>
                </ul>
            </div>
        `
    }
};

// Function to Navigate from Subjects Page to Story Page with specific topic
function openStory(subjectKey) {
    localStorage.setItem('selectedSubject', subjectKey);
    window.location.href = 'story.html';
}

// Function to Load Story and Notes in story.html
document.addEventListener('DOMContentLoaded', () => {
    const topicTitleEl = document.getElementById('topic-title');
    
    // Check if we are on story.html page
    if (topicTitleEl) {
        const selectedKey = localStorage.getItem('selectedSubject') || 'physics';
        const data = storyDatabase[selectedKey];

        if (data) {
            document.getElementById('topic-title').innerText = data.title;
            document.getElementById('subject-name').innerText = data.subject;
            document.getElementById('novel-view').innerHTML = data.novelContent;
            document.getElementById('notes-view').innerHTML = data.notesContent;
        }
    }
});

// Switcher Function for Dual Mode (Novel vs Exam Notes)
function switchMode(mode) {
    const novelBtn = document.getElementById('btn-novel');
    const notesBtn = document.getElementById('btn-notes');
    const novelView = document.getElementById('novel-view');
    const notesView = document.getElementById('notes-view');

    if (mode === 'novel') {
        novelBtn.classList.add('active');
        notesBtn.classList.remove('active');
        novelView.classList.add('active');
        notesView.classList.remove('active');
    } else {
        notesBtn.classList.add('active');
        novelBtn.classList.remove('active');
        notesView.classList.add('active');
        novelView.classList.remove('active');
    }
}



