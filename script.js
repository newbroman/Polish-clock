let hours = 12, minutes = 0, isQuiz = false, isRevealed = true, currentLang = 'EN', showPh = true;

// Data Sets
const hNom = ["północ", "pierwsza", "druga", "trzecia", "czwarta", "piąta", "szósta", "siódma", "ósma", "dziewiąta", "dziesiąta", "jedenasta", "południe", "trzynasta", "czternasta", "piętnasta", "szesnasta", "siedemnasta", "osiemnasta", "dziewiętnasta", "dwudziesta", "dwudziesta pierwsza", "dwudziesta druga", "dwudziesta trzecia"];
const hNomPh = ["poow-nots", "pyerv-shah", "droo-gah", "tshe-tsyah", "chvar-tah", "pyon-tah", "shoos-tah", "shood-mah", "oos-mah", "je-vyon-tah", "je-shon-tah", "ye-de-nas-tah", "po-wood-nye", "tshi-nas-tah", "chter-nas-tah", "pyent-nas-tah", "shes-nas-tah", "she-dem-nas-tah", "o-shem-nas-tah", "je-vyet-nas-tah", "dvoo-jest-ah", "dvoo-jest-ah pyerv-shah", "dvoo-jest-ah droo-gah", "dvoo-jest-ah tshe-tsyah"];
const hGen = ["północy", "pierwszej", "drugiej", "trzeciej", "czwartej", "piątej", "szóstej", "siódmej", "ósmej", "dziewiątej", "dziesiątej", "jedenastej", "południa", "trzynastej", "czternastej", "piętnastej", "szesnastej", "siedemnastej", "osiemnastej", "dziewiętnastej", "dwudziestej", "dwudziestej pierwszej", "dwudziestej drugiej", "dwudziestej trzeciej"];
const hGenPh = ["poow-no-tsi", "pyerv-shey", "droo-gyey", "tshe-tsiey", "chvar-tey", "pyon-tey", "shoos-tey", "shood-mey", "oos-mey", "je-vyon-tey", "je-shon-tey", "ye-de-nas-tey", "po-wood-nyah", "tshi-nas-tey", "chter-nas-tey", "pyent-nas-tey", "shes-nas-tey", "she-dem-nas-tey", "o-shem-nas-tey", "je-vyet-nas-tey", "dvoo-jes-tey", "dvoo-jes-tey pyerv-shey", "dvoo-jes-tey droo-gyey", "dvoo-jes-tey tshe-tsiey"];
const mAll = ["zero", "jedna", "dwie", "trzy", "cztery", "pięć", "sześć", "siedem", "osiem", "dziewięć", "dziesięć", "jedenaście", "dwanaście", "trzynaście", "czternaście", "piętnaście", "szesnaście", "siedemnaście", "osiemnaście", "dziewiętnaście", "dwadzieścia", "dwadzieścia jeden", "dwadzieścia dwie", "dwadzieścia trzy", "dwadzieścia cztery", "dwadzieścia pięć", "dwadzieścia sześć", "dwadzieścia siedem", "dwadzieścia osiem", "dwadzieścia dziewięć", "trzydzieści", "trzydzieści jeden", "trzydzieści dwie", "trzydzieści trzy", "trzydzieści cztery", "trzydzieści pięć", "trzydzieści sześć", "trzydzieści siedem", "trzydzieści osiem", "trzydzieści dziewięć", "czterdzieści", "czterdzieści jeden", "czterdzieści dwie", "czterdzieści trzy", "czterdzieści cztery", "czterdzieści pięć", "czterdzieści sześć", "czterdzieści siedem", "czterdzieści osiem", "czterdzieści dziewięć", "pięćdziesiąt", "pięćdziesiąt jeden", "pięćdziesiąt dwie", "pięćdziesiąt trzy", "pięćdziesiąt cztery", "pięćdziesiąt pięć", "pięćdziesiąt sześć", "pięćdziesiąt siedem", "pięćdziesiąt osiem", "pięćdziesiąt dziewięć"];
const mAllPh = ["ze-ro", "yed-nah", "dvye", "tshi", "chter-ih", "pyench", "shesh-ch", "she-dem", "o-shem", "je-vyench", "je-shench", "ye-de-nas-che", "dva-nash-che", "tshi-nash-che", "chter-nash-che", "pyent-nash-che", "shes-nas-che", "she-dem-nash-che", "o-shem-nash-che", "je-vyet-nas-che", "dva-jes-tsyah", "dva-jes-tsyah yed-nah", "dva-jes-tsyah dvye", "dva-jes-tsyah tshi", "dva-jes-tsyah chter-ih", "dva-jes-tsyah pyench", "dva-jes-tsyah shesh-ch", "dva-jes-tsyah she-dem", "dva-jes-tsyah o-shem", "dva-jes-tsyah je-vyench", "tshi-jes-tsyi", "tshi-jes-tsyi yed-nah", "tshi-jes-tsyi dvye", "tshi-jes-tsyi tshi", "tshi-jes-tsyi chter-ih", "tshi-jes-tsyi pyench", "tshi-jes-tsyi shesh-ch", "tshi-jes-tsyi she-dem", "tshi-jes-tsyi o-shem", "tshi-jes-tsyi je-vyench", "chter-jes-tsyi", "chter-jes-tsyi yed-nah", "chter-jes-tsyi dvye", "chter-jes-tsyi tshi", "chter-jes-tsyi chter-ih", "chter-jes-tsyi pyench", "chter-jes-tsyi shesh-ch", "chter-jes-tsyi she-dem", "chter-jes-tsyi o-shem", "chter-jes-tsyi je-vyench", "pyench-je-shont", "pyench-je-shont yed-nah", "pyench-je-shont dvye", "pyench-je-shont tshi", "pyench-je-shont chter-ih", "pyench-je-shont pyench", "pyench-je-shont shesh-ch", "pyench-je-shont she-dem", "pyench-je-shont o-shem", "pyench-je-shont je-vyench"];

const dict = {
    EN: { title: "Polish Time Learner", actual: "ACTUAL TIME", random: "RANDOM TIME", listen: "🔊 LISTEN", slow: "½ SPEED", ask: "How to say?", reveal: "REVEAL", close: "Close Help", qOn: "Quiz: ON", qOff: "Quiz: OFF" },
    PL: { title: "Nauka Czasu", actual: "AKTUALNY CZAS", random: "LOSOWY CZAS", listen: "🔊 SŁUCHAJ", slow: "½ PRĘDKOŚĆ", ask: "Jak to powiedzieć?", reveal: "POKAŻ", close: "Zamknij Pomoc", qOn: "Quiz: WŁ", qOff: "Quiz: WYŁ" }
};

function init() {
    const c = document.getElementById('clock-container');
    for (let i = 0; i < 12; i++) {
        const m = document.createElement('div'); m.className = 'mark';
        m.style.transform = `rotate(${i * 30}deg)`; c.appendChild(m);
    }
    setRealTime(); 
}

function startDrag(e) {
    e.preventDefault();
    const move = (ev) => {
        const rect = document.getElementById('clock-container').getBoundingClientRect();
        const cx = ev.touches ? ev.touches[0].clientX : ev.clientX;
        const cy = ev.touches ? ev.touches[0].clientY : ev.clientY;
        const x = cx - rect.left - rect.width / 2;
        const y = cy - rect.top - rect.height / 2;
        const angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
        const norm = (angle < 0) ? angle + 360 : angle;
        const dist = Math.sqrt(x*x + y*y);
        if (dist < 35) {
            let newH = Math.round(norm / 30) % 12;
            if (hours >= 12) newH += 12;
            hours = newH;
        } else {
            minutes = Math.round(norm / 6) % 60;
        }
        updateDisplay(true);
    };
    const stop = () => { 
        window.removeEventListener('mousemove', move); 
        window.removeEventListener('touchmove', move); 
        if (isQuiz) generateQuizOptions();
    };
    window.addEventListener('mousemove', move); window.addEventListener('touchmove', move);
    window.addEventListener('mouseup', stop, {once:true}); window.addEventListener('touchend', stop, {once:true});
}

function updateDisplay(syncInput) {
    const hRotation = ((hours % 12) * 30) + (minutes * 0.5);
    document.getElementById('h-hand').style.transform = `rotate(${hRotation}deg)`;
    document.getElementById('m-hand').style.transform = `rotate(${minutes * 6}deg)`;
    if(syncInput) document.getElementById('time-input-display').value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    
    const isFormal = document.getElementById('formal').checked;
    let p = "", ph = "", e = "";

    if (isFormal) {
        let mStr = (minutes > 0 && minutes < 10) ? "zero " + mAll[minutes] : (minutes === 0 ? "" : mAll[minutes]);
        let phStr = (minutes > 0 && minutes < 10) ? "ze-ro " + mAllPh[minutes] : (minutes === 0 ? "" : mAllPh[minutes]);
        // Formal uses Nominative (Orange)
        p = `Godzina <span class="nom-case">${hNom[hours]}</span> ${mStr}`.trim();
        ph = `go-jee-nah ${hNomPh[hours]} ${phStr}`.trim();
        e = `${hours}:${minutes.toString().padStart(2, '0')}`;
    } else {
        let h12 = hours % 12, n12 = (hours + 1) % 12;
        let hNomSpan = `<span class="nom-case">${hNom[h12]}</span>`;
        let nNomSpan = `<span class="nom-case">${hNom[n12]}</span>`;
        let hGenSpan = `<span class="gen-case">${hGen[h12]}</span>`;
        let nGenSpan = `<span class="gen-case">${hGen[n12]}</span>`;

        if (minutes === 0) {
            let specialH = hours === 0 ? "Północ" : hours === 12 ? "Południe" : hNom[h12];
            p = `<span class="nom-case">${specialH}</span>`;
            ph = hours === 0 ? "poow-nots" : hours === 12 ? "po-wood-nye" : hNomPh[h12];
            e = hours === 0 ? "Midnight" : hours === 12 ? "Noon" : `${h12 || 12} o'clock`;
        } else if (minutes < 30) {
            p = `${mAll[minutes]} po ${hGenSpan}`; 
            ph = `${mAllPh[minutes]} po ${hGenPh[h12]}`; 
            e = `${minutes} past ${h12 || 12}`;
        } else if (minutes === 30) {
            p = `Wpół do ${nGenSpan}`; 
            ph = `vpoow doh ${hGenPh[n12]}`; 
            e = `Half past ${h12 || 12}`;
        } else {
            let d = 60 - minutes; 
            p = `Za ${mAll[d]} ${nNomSpan}`; 
            ph = `zah ${mAllPh[d]} ${hNomPh[n12]}`; 
            e = `${d} to ${n12 || 12}`;
        }
    }

    const d = dict[currentLang] || dict['EN'];
    document.getElementById('app-title').innerText = d.title;
    const pt = document.getElementById('polish-text'), pht = document.getElementById('phonetic-text'), et = document.getElementById('english-text');
    
    if (isQuiz && !isRevealed) { 
        pt.innerText = d.ask; pht.innerText = ""; et.innerText = ""; 
    } else { 
        pt.innerHTML = p; pht.innerText = showPh ? ph : ""; et.innerText = e; 
    }
}

function setRealTime() { const n = new Date(); hours = n.getHours(); minutes = n.getMinutes(); isRevealed = !isQuiz; updateDisplay(true); if(isQuiz) generateQuizOptions(); }

function rollTime() { 
    hours = Math.floor(Math.random() * 24); 
    minutes = Math.floor(Math.random() * 60); 
    isRevealed = !isQuiz; 
    updateDisplay(true); 
    if (isQuiz) generateQuizOptions(); 
}

function revealAnswer() { 
    isRevealed = true; 
    updateDisplay(true); 
    speak(1); 
}

function toggleQuiz() { 
    isQuiz = !isQuiz; 
    isRevealed = !isQuiz; 
    const quizContainer = document.getElementById('quiz-options');
    const revealBtn = document.getElementById('reveal-btn');

    if (isQuiz) {
        generateQuizOptions();
        revealBtn.style.display = "none";
        document.getElementById('quiz-toggle').innerText = (dict[currentLang] || dict['EN']).qOn;
    } else {
        quizContainer.style.display = "none";
        document.getElementById('quiz-toggle').innerText = (dict[currentLang] || dict['EN']).qOff;
        updateDisplay(true);
    }
}

function generateQuizOptions() {
    const container = document.getElementById('quiz-options');
    const isFormal = document.getElementById('formal').checked;
    
    const correctAnswer = getPolishTimeString(hours, minutes, isFormal);
    let options = [correctAnswer];

    while (options.length < 4) {
        let rH = Math.floor(Math.random() * 24);
        let rM = Math.floor(Math.random() * 60);
        let wrongOpt = getPolishTimeString(rH, rM, isFormal);
        if (!options.includes(wrongOpt)) options.push(wrongOpt);
    }

    options.sort(() => Math.random() - 0.5);

    container.innerHTML = "";
    container.style.display = "grid";
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        // CRITICAL: Use innerHTML so the color spans work
        btn.innerHTML = opt; 
        btn.style.cssText = "padding:12px 4px; font-size:13px; border:1px solid #ccc; border-radius:8px; background:white; cursor:pointer; font-family:inherit;";
        
        btn.onclick = () => {
           if (opt === correctAnswer) {
    btn.style.background = "#28a745";
    btn.style.color = "white";
    // This turns the colored spans white so they pop against the green
    btn.querySelectorAll('span').forEach(s => s.style.setProperty('color', 'white', 'important'));
    
    setTimeout(() => {
        revealAnswer();
        container.style.display = "none";
    }, 500);
}
        } else {
                btn.style.background = "#dc3545";
                btn.style.color = "white";
                btn.querySelectorAll('span').forEach(s => s.style.color = "white");
                btn.disabled = true;
            }
        };
        container.appendChild(btn);
    });
    updateDisplay(false);
}

function getPolishTimeString(h, m, formal) {
    if (formal) {
        let mStr = (m > 0 && m < 10) ? "zero " + mAll[m] : (m === 0 ? "" : mAll[m]);
        // Formal Hours are always Nominative (Orange)
        return `Godzina <span class="nom-case">${hNom[h]}</span> ${mStr}`.trim();
    } else {
        let h12 = h % 12, n12 = (h + 1) % 12;
        if (m === 0) {
            let spec = h === 0 ? "Północ" : h === 12 ? "Południe" : hNom[h12];
            return `<span class="nom-case">${spec}</span>`;
        }
        if (m < 30) return `${mAll[m]} po <span class="gen-case">${hGen[h12]}</span>`;
        if (m === 30) return `Wpół do <span class="gen-case">${hGen[n12]}</span>`;
        return `Za ${mAll[60-m]} <span class="nom-case">${hNom[n12]}</span>`;
    }
}

function toggleLang() { currentLang = (currentLang === 'EN' ? 'PL' : 'EN'); updateDisplay(true); if(isQuiz) generateQuizOptions(); }

function togglePh() { 
    showPh = !showPh; 
    updateDisplay(true); 
}

function manualTime(val) { 
    if(!val.includes(':')) return; 
    const [h, m] = val.split(':'); 
    let ph = parseInt(h), pm = parseInt(m); 
    if(!isNaN(ph) && !isNaN(pm)) { 
        hours = Math.min(23, Math.max(0, ph)); 
        minutes = Math.min(59, Math.max(0, pm)); 
        updateDisplay(false); 
        if(isQuiz) generateQuizOptions();
    } 
}

function speak(r) { 
    window.speechSynthesis.cancel(); 
    let t = document.getElementById('polish-text').innerText; 
    if (t.includes("?")) return; 
    const m = new SpeechSynthesisUtterance(t); 
    m.lang = 'pl-PL'; 
    m.rate = r; 
    window.speechSynthesis.speak(m); 
}

async function toggleHelp() {
    const modal = document.getElementById('help-modal');
    const content = document.getElementById('help-content');

    if (modal.style.display === 'block') {
        modal.style.display = 'none';
        return;
    }

    const helpFile = currentLang === 'PL' ? 'help_pl.html' : 'help_en.html';

    try {
        const response = await fetch(helpFile);
        if (!response.ok) throw new Error('Help file not found');
        const html = await response.text();
        
        content.innerHTML = html;
        modal.style.display = 'block';
    } catch (error) {
        console.error('Error loading help:', error);
        content.innerHTML = "<p>Error loading help content.</p>";
        modal.style.display
    }
}
