    // BUGFIX: The tsParticles.load() call was at the top level of the script without
    // any error handling. If the tsParticles CDN fails to load (network error, ad
    // blocker, CDN outage) the call throws a ReferenceError that propagates up and
    // stops the ENTIRE script from executing – no event listeners (including the 🎲
    // button handler) were ever registered, making all interactive features broken.
    // FIX: Wrap in try/catch so the rest of the script always runs regardless.
    try {
        tsParticles.load("tsparticles", {
            fullScreen: {enable: false},
            background: {color: "transparent"},
            particles: {
                number: {value: 70, density: {enable: true, area: 900}},
                color: {value: ["#e0c3fc", "#8ec5fc", "#a1c4fd"]},
                shape: {type: "circle"},
                opacity: {value: 0.19, anim: {enable: true, speed: 0.8, opacity_min: 0.06, sync: false}},
                size: {value: {min: 2, max: 7}, anim: {enable: true, speed: 5, size_min: 1, sync: false}},
                move: {enable: true, speed: 1.3, direction: "none", outModes: "out", random: true}
            },
            interactivity: {
                events: {onHover: {enable: true, mode: "bubble"}, resize: true},
                modes: {bubble: {distance: 84, duration: 0.6, size: 12, opacity: 0.45}}
            }
        });
    } catch (e) {
        // particles unavailable – page works fine without them
    }
    document.title = "#152 Gründe warum ich dich liebe";
    const defaultReasons = {
        1: "Wegen deinem wunderschönen Lächeln",
        2: "Wegen deinen hübschen tiefen Augen",
        3: "Wegen der Art wie du deinen Körper bewegst",
        4: "Wegen deiner weichen Haare",
        5: "Wegen der Art mit der du Sprichst",
        6: "Wegen deiner Leidenschaft für Sachen, die du liebst",
        7: "Wegen deiner Begeisterung für kleine Dinge",
        8: "Weil kein Bild dir je gerecht werden könnte, ich speichere sie trotzdem alle",
        9: "Weil du mein Kopfkino bist",
        10: "Weil du mich immer beim Wort nimmst",
        11: "Weil du soooo gut riechst",
        12: "Weil du selbst süß bist, wenn du am schmollen bist",
        13: "Weil du das süßeste Grinsen auf der Welt hast",
        14: "Weil deine Augen leuchten, wenn du von etwas sprichst, das du liebst",
        15: "Weil mich deine Berührungen manchmal echt verrückt machen",
        16: "Weil dein Körper für mich perfekt ist, nicht im Vergleich, sondern weil er deiner ist",
        17: "Weil deine Lippen so aussehen, als wären sie dafür gemacht, dass ich sie küsse",
        18: "Weil ich jedes Muttermal, jede Narbe oder Markierung an dir liebe",
        19: "Wegen deiner Stimme, besonders wenn du flüsterst",
        20: "Wegen deiner sanften Art",
        21: "Weil du mich so ansiehst, als wäre ich das Beste auf der Welt",
        22: "Weil du mir zuhörst, wirklich zuhörst",
        23: "Weil du über meine dummen Witze lachst",
        24: "Weil du so unendlich geduldig mit mir bist",
        25: "Weil du mich mit einem Blick beruhigen kannst",
        26: "Weil ich mich bei dir sicher fühle",
        27: "Weil du dich für mich freust, wenn mir was gelingt",
        28: "Weil du mich immer streichelst",
        29: "Weil dein Herz trotz deiner Vergangenheit noch so viel Liebe für mich übrig hat",
        30: "Weil ich mich immer aus neue freue dich zu sehen",
        31: "Weil ich mich bei dir nicht anpassen muss",
        32: "Weil du mich ernst nimmst",
        33: "Weil du mich besser machst ohne Zwang",
        34: "Weil du meine Art Mensch bist",
        35: "Weil du versuchst, immer ehrlich mit mir zu sein",
        36: "Weil du eine der intelligentesten Personen bist, die ich je kennengelernt habe",
        37: "Weil du mir verzeihst, wenn ich Mist baue",
        38: "Weil du meine Grenzen respektierst",
        39: "Weil du mich nur mit deiner Stimme zur Ruhe bringen kannst",
        40: "Weil selbst das Schweigen zwischen uns angenehm ist",
        41: "Weil du merkst, wenn es mir schlecht geht",
        42: "Weil du meine dummen Aktionen nicht durchgehen lässt",
        43: "Weil du Wunden heilst, von denen du nichts weißt",
        44: "Weil ich dich vermisse, sobald du weg bist",
        45: "Weil ich dir auch meine Fehler gestehen kann",
        46: "Weil du mein Herz schneller schlagen lässt",
        47: "Weil ich nicht aufhören kann, an dich zu denken",
        48: "Weil mich selbst deine Anwesenheit glücklich macht",
        49: "Weil du alles bist, was ich nie gesucht habe, aber immer gebraucht habe",
        50: "Weil du meine Hand immer so fest hältst",
        51: "Weil du mich an Dinge erinnerst, die ich vergesse",
        52: "Weil du mir zeigst, wenn ich mir zu viel zumute",
        53: "Weil du meine Macken liebst, anstatt sie zu ertragen",
        54: "Weil ich mich wegen dir besser mit meinen eigenen Körper umgehe",
        55: "Weil du dir all meine Lieblingslieder anhörst",
        56: "Weil du mich überraschen willst",
        57: "Weil du mir vertraust",
        58: "Weil du mich an deine Träume teilhaben lässt",
        59: "Weil du mein Lieblingsmensch zum Aufstehen bist",
        60: "Weil du mein Lieblingsmensch zum Einschlafen bist",
        61: "Weil du mir zeigst, was bedingungslos wirklich bedeutet",
        62: "Weil du für die Dinge kämpfst, die dir wichtig sind",
        63: "Weil du mir zeigst, wie ich deine Lieblingssachen mache",
        64: "Weil du mich daran erinnerst, genug zu trinken",
        65: "Weil du eine spezielle Art hast um mich zu umarmen",
        66: "Weil du meine Ängste ernst nimmst",
        67: "Weil du die Art liebst, wie ich dich ansehe",
        68: "Weil du meine Familie magst",
        69: "Weil ich deine Familie mag",
        70: "Weil du meine beste Freundin bist",
        71: "Weil du mich herausforderst",
        72: "Weil du mir zeigst, wenn ich unrecht habe, ohne mich klein zu machen",
        73: "Weil du meine Erfolge feierst, als wären es deine eigenen",
        74: "Weil du mir zeigst, dass ich nie zu viel fühle",
        75: "Weil du mich daran gewöhnst, geliebt zu werden",
        76: "Weil du meine Geheimnisse für dich behältst",
        77: "Weil du mir zeigst, wie schön die Welt sein kann",
        78: "Weil du mir Raum gibst, aber ich ihn nie brauche",
        79: "Weil du meine Favoritin bist",
        80: "Weil du mich anlächelst, wenn ich schlecht gelaunt bin",
        81: "Weil du meine Lieblingsstimme im Chaos bist",
        82: "Weil du die Art hast, wie du meinen Namen sagst",
        83: "Weil du meine Ruhe bist",
        84: "Weil du mein größter Fan bist",
        85: "Weil du mich an meine Stärke erinnerst, wenn ich sie vergesse",
        86: "Weil du meine Abneigungen respektierst",
        87: "Weil du meine Kindheitsgeschichten liebst",
        88: "Weil du mir zeigst, dass ich genug bin",
        89: "Weil du meine Abende besser machst",
        90: "Weil du meine Morgen besser machst",
        91: "Weil du so wunderschön tanzt",
        92: "Weil du meine Meinung schätzt",
        93: "Weil du mein Vertrauen nie ausnutzt",
        94: "Weil du immerzu meine Nähe suchst",
        95: "Weil du meine Energie spürst und darauf eingehst",
        96: "Weil du meine Lieblingsperson für alles geworden bist",
        97: "Weil du mir das Gefühl gibst, nach Hause zu kommen",
        98: "Weil du mein Sinn für Abenteuer bist",
        99: "Weil du meinen Drang nach Adrenalin verstehst",
        100: "Weil du in einen Raum voller Menschen mich wählen würdest",
        101: "Weil du meine Launen erträgst",
        102: "Weil du mich tröstest wenn ich traurig bin",
        103: "Weil du mein erster Gedanke am Morgen bist",
        104: "Weil du mein letzter Gedanke am Abend bist",
        105: "Weil du mir zeigst, dass Schönheit von innen kommt",
        106: "Weil du meine Hobbys interessant findest",
        107: "Weil du mich in deine Welt einlädst",
        108: "Weil du meine Stärken bewunderst",
        109: "Weil du meine Schwächen akzeptierst",
        110: "Weil du immerzu meinen Ring trägst",
        111: "Weil du für Fehler immer dich entschuldigst",
        112: "Weil du mir gibst, ohne etwas zu erwarten",
        113: "Weil ich mich nie mit dir schämen müsste",
        114: "Weil du meine Albernheit teilst",
        115: "Weil du mich nie ändern willst",
        116: "Weil du ernst sein kannst wenn es sein muss",
        117: "Weil du mein persönlicher Sonnenschein bist",
        118: "Weil du meine Entscheidungen respektierst",
        119: "Weil du mir das Gefühl gibst, der wichtigste Mensch zu sein",
        120: "Weil du mich verstehst, auch ohne Worte",
        121: "Weil du meine Leidenschaft für dich entfacht hast",
        122: "Weil du mir zeigst, wie man wirklich liebt",
        123: "Weil ich deine Hand auf meinem Herzen spüre",
        124: "Weil du die Kälte mit deiner Wärme vertreibst",
        125: "Weil du die Art magst, wie du für mich kämpfst",
        126: "Weil du meine Zweifel vertreibst",
        127: "Weil du meine Seele zur Ruhe bringst",
        128: "Weil du meine Abenteuerlust teilst",
        129: "Weil du mein stiller Verbündeter bist",
        130: "Weil du meine Träume ernst nimmst",
        131: "Weil du meine Art zu lieben erwiderst",
        132: "Weil du mein Kompass im Chaos bist",
        133: "Weil du meine Vergangenheit nicht verurteilst",
        134: "Weil du meine Zukunft mit mir planen willst",
        135: "Weil du meine Ehrlichkeit zu schätzen weißt",
        136: "Weil du meine Schultern massierst, wenn ich verspannt bin",
        137: "Weil du meine Lieblingskünstlerin bist",
        138: "Weil du meine Stille genießen kannst",
        139: "Weil du mein größtes Vorbild in Sachen Liebe bist",
        140: "Weil du die Art liebst, wie ich dich ansehe",
        141: "Weil du die Art liebst, wie ich dich küsse",
        142: "Weil du die Art liebst, wie ich dich halte",
        143: "Weil du mein persönlicher Motivator bist",
        144: "Weil du so süß beim Schlafen bist",
        145: "Weil du meine Macken charmant findest",
        146: "Weil du meine innere Ruhe bist",
        147: "Weil du mit mir Skifahren gehst",
        148: "Weil du die Art liebst, wie ich dir Komplimente mache",
        149: "Weil du meine Geduld auf die Probe stellst und ich dich trotzdem liebe",
        150: "Weil du meine Welt bunter machst",
        151: "Weil du meine Definition von Liebe verändert hast",
        152: "Weil du der Grund für jedes Lächeln in den letzten 5 Monaten warst, alle 152 Tage lang",

    };
    let reasons = {...defaultReasons};
    let currentModalIndex = 1;
    let availableReasons = [];
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalNumber = document.getElementById('modalNumber');
    const modalText = document.getElementById('modalText');
    const modalCounter = document.getElementById('modalCounter');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const modalContentInner = document.getElementById('modalContentInner');
    let startX = 0, currentX = 0, isDragging = false, hasTouch = 'ontouchstart' in window;
    let cuddleActive = false;
    let sunsetMode = false;
    const MILESTONES = {10: '🌟', 25: '🌟', 50: '🌟', 100: '🌟', 152: '❤️'};
    let favorites = new Set((() => { try { return JSON.parse(localStorage.getItem('lkfavorites') || '[]'); } catch { return []; } })());
    let currentFilter = 'all';
    const THEMES = ['default', 'rose', 'ocean', 'night'];
    const TOAST_DISPLAY_MS = 2400;
    const THEME_ICONS = {default: '🌅', rose: '🌹', ocean: '🌊', night: '☀️'};
    const THEME_NEXT_LABELS = {
        default: 'Rose-Modus 🌹',
        rose: 'Ozean-Modus 🌊',
        ocean: 'Nacht-Modus 🌙',
        night: 'Standard-Modus ✨'
    };
    let currentTheme = localStorage.getItem('lktheme') || 'default';
    const TOAST_HIDE_MS = 280;

    function generateReasonsGrid() {
        const grid = document.getElementById('reasonsGrid');
        grid.innerHTML = '';
        availableReasons = [];
        let idx = 0;
        for (let i = 1; i <= 152; i++) {
            const card = document.createElement('div');
            const isEmpty = !reasons[i];
            card.className = `reason-card${isEmpty ? ' empty-reason' : ''}`;
            card.tabIndex = 0;
            card.dataset.num = i;
            card.innerHTML = `
            <div class="reason-number">#${i}</div>
            <div class="reason-text" data-reason="${i}">
                ${reasons[i] || ''}
            </div>
        `;
            card.style.setProperty('--i', idx);
            // Milestone badge
            if (MILESTONES[i]) {
                const badge = document.createElement('div');
                badge.className = `milestone-badge${i === 152 ? ' last' : ''}`;
                badge.textContent = MILESTONES[i];
                badge.title = `Meilenstein #${i}`;
                card.appendChild(badge);
                card.classList.add(i === 152 ? 'milestone-152' : 'milestone');
            }
            // Favourite button
            const favBtn = document.createElement('button');
            favBtn.className = `fav-btn${favorites.has(i) ? ' active' : ''}`;
            favBtn.textContent = '♥';
            favBtn.title = favorites.has(i) ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen';
            favBtn.setAttribute('aria-label', 'Favorit');
            favBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(i, favBtn);
            });
            card.appendChild(favBtn);
            if (cuddleActive) card.classList.add('big');
            if (reasons[i]) {
                availableReasons.push(i);
                card.addEventListener('click', () => openModal(i));
                card.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') openModal(i);
                });
                grid.appendChild(card);
                idx++;
            }
        }
        if (cuddleActive) grid.classList.add('cuddle');
        else grid.classList.remove('cuddle');
        applyFilter();
    }

    function openModal(number) {
        currentModalIndex = availableReasons.indexOf(number);
        updateModalContent();
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        modalOverlay.focus();
    }

    function updateModalContent() {
        const reasonNumber = availableReasons[currentModalIndex];
        const reasonText = reasons[reasonNumber];
        modalNumber.textContent = `#${reasonNumber}`;
        modalText.textContent = reasonText;
        modalCounter.textContent = `${currentModalIndex + 1} / ${availableReasons.length}`;
        modalPrev.disabled = currentModalIndex === 0;
        modalNext.disabled = currentModalIndex === availableReasons.length - 1;
        modalContentInner.style.transform = 'translateX(0) scale(1)';
        modalContentInner.style.opacity = '1';
        modalContentInner.classList.remove('slide-left', 'slide-right', 'slide-in-left', 'slide-in-right');
    }

    function navigateModal(direction) {
        const newIndex = currentModalIndex + direction;
        if (newIndex >= 0 && newIndex < availableReasons.length) {
            const isNext = direction > 0;
            modalContentInner.style.transform = 'translateX(0) scale(1)';
            modalContentInner.style.opacity = '1';
            modalContentInner.classList.add(isNext ? 'slide-left' : 'slide-right');
            setTimeout(() => {
                currentModalIndex = newIndex;
                updateModalContent();
                modalContentInner.style.transform = 'translateX(0) scale(1)';
                modalContentInner.style.opacity = '1';
                modalContentInner.classList.remove('slide-left', 'slide-right');
                modalContentInner.classList.add(isNext ? 'slide-in-right' : 'slide-in-left');
                setTimeout(() => {
                    modalContentInner.classList.remove('slide-in-left', 'slide-in-right');
                    modalContentInner.style.transform = 'translateX(0) scale(1)';
                    modalContentInner.style.opacity = '1';
                }, 380);
            }, 380);
        }
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function handleTouchStart(e) {
        if (!hasTouch) return;
        startX = e.touches[0].clientX;
        isDragging = true;
        modalContentInner.classList.add('swiping');
    }

    function handleTouchMove(e) {
        if (!isDragging || !hasTouch) return;
        e.preventDefault();
        currentX = e.touches[0].clientX;
        const diffX = currentX - startX;
        const maxSwipe = 120;
        const boundedDiff = Math.max(-maxSwipe, Math.min(maxSwipe, diffX));
        const scale = 1 - Math.abs(boundedDiff) / 500;
        const opacity = 1 - Math.abs(boundedDiff) / 300;
        modalContentInner.style.transform = `translateX(${boundedDiff}px) scale(${scale})`;
        modalContentInner.style.opacity = opacity;
    }

    function handleTouchEnd(e) {
        if (!isDragging || !hasTouch) return;
        isDragging = false;
        modalContentInner.classList.remove('swiping');
        const diffX = currentX - startX;
        const threshold = 60;
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0 && currentModalIndex > 0) {
                navigateModal(-1);
            } else if (diffX < 0 && currentModalIndex < availableReasons.length - 1) {
                navigateModal(1);
            } else {
                resetModalTransform();
            }
        } else {
            resetModalTransform();
        }
        startX = 0;
        currentX = 0;
    }

    function handleMouseDown(e) {
        if (hasTouch) return;
        startX = e.clientX;
        isDragging = true;
        modalContentInner.classList.add('swiping');
        e.preventDefault();
    }

    function handleMouseMove(e) {
        if (!isDragging || hasTouch) return;
        currentX = e.clientX;
        const diffX = currentX - startX;
        const maxSwipe = 120;
        const boundedDiff = Math.max(-maxSwipe, Math.min(maxSwipe, diffX));
        const scale = 1 - Math.abs(boundedDiff) / 500;
        const opacity = 1 - Math.abs(boundedDiff) / 300;
        modalContentInner.style.transform = `translateX(${boundedDiff}px) scale(${scale})`;
        modalContentInner.style.opacity = opacity;
    }

    function handleMouseUp(e) {
        if (!isDragging || hasTouch) return;
        isDragging = false;
        modalContentInner.classList.remove('swiping');
        const diffX = currentX - startX;
        const threshold = 60;
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0 && currentModalIndex > 0) {
                navigateModal(-1);
            } else if (diffX < 0 && currentModalIndex < availableReasons.length - 1) {
                navigateModal(1);
            } else {
                resetModalTransform();
            }
        } else {
            resetModalTransform();
        }
        startX = 0;
        currentX = 0;
    }

    function resetModalTransform() {
        modalContentInner.style.transition = '';
        modalContentInner.style.transform = 'translateX(0) scale(1)';
        modalContentInner.style.opacity = '1';
    }

    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', () => navigateModal(-1));
    modalNext.addEventListener('click', () => navigateModal(1));
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    modalContentInner.addEventListener('touchstart', handleTouchStart, {passive: false});
    modalContentInner.addEventListener('touchmove', handleTouchMove, {passive: false});
    modalContentInner.addEventListener('touchend', handleTouchEnd, {passive: false});
    modalContentInner.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('keydown', (e) => {
        if (modalOverlay.classList.contains('active')) {
            switch (e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    if (currentModalIndex > 0) navigateModal(-1);
                    break;
                case 'ArrowRight':
                    if (currentModalIndex < availableReasons.length - 1) navigateModal(1);
                    break;
            }
        }
    });

    // Shuffle-Button: #152 bleibt immer an letzter Stelle
    document.getElementById('shuffleBtn').onclick = function () {
        availableReasons = [];
        let keys = Object.keys(defaultReasons).filter(k => k != "152");
        keys = keys.sort(() => Math.random() - 0.5);
        reasons = {};
        keys.forEach((k, i) => reasons[i + 1] = defaultReasons[k]);
        reasons[152] = defaultReasons[152];
        cuddleActive = false;
        document.getElementById('reasonsGrid').classList.remove('cuddle');
        generateReasonsGrid();
        showToast('🔀 Reihenfolge gemischt!');
    };

    // Theme-Modus: Default → Rose → Ozean → Nacht → Default
    document.getElementById('sunsetModeBtn').onclick = function () {
        const nextIdx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
        applyTheme(THEMES[nextIdx]);
        const labels = {default: '✨ Standard', rose: '🌹 Rose', ocean: '🌊 Ozean', night: '🌙 Nacht'};
        showToast(`${labels[currentTheme]} aktiviert`);
    };

    generateReasonsGrid();


    /**
     *
     *

     // === VALENTINSTAGS-POPUP ===
     let valentineTimeout = null;

     function showValentinePopup() {
     // Prüfe ob bereits beantwortet (nur bei "Ja" wird gespeichert!)
     if (localStorage.getItem('valentineAnswered')) return;

     // Entferne alte Popups
     const oldOverlay = document.querySelector('[data-valentine-popup]');
     if (oldOverlay) oldOverlay.remove();

     const overlay = document.createElement('div');
     overlay.setAttribute('data-valentine-popup', 'true');
     overlay.style.cssText = `
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background: rgba(0, 0, 0, 0.4);
     backdrop-filter: blur(8px);
     z-index: 2000;
     display: flex;
     align-items: center;
     justify-content: center;
     animation: fadeIn 0.4s ease-out;
     `;

     const popup = document.createElement('div');
     popup.style.cssText = `
     background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 240, 255, 0.91) 100%);
     backdrop-filter: blur(29px);
     border-radius: 32px;
     padding: 3rem 2.5rem;
     max-width: 500px;
     width: 90%;
     text-align: center;
     box-shadow: 0 30px 90px rgba(90, 60, 120, .22);
     border: 2px solid rgba(180, 160, 255, 0.16);
     animation: slideUp 0.5s cubic-bezier(.36, 1.65, .73, 1.01);
     font-family: 'Georgia', serif;
     `;

     popup.innerHTML = `
     <div style="font-size: 3rem; margin-bottom: 1.2rem;">💌</div>
     <h2 style="color: #7F53AC; font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Montserrat', sans-serif;">
     Eine wichtige Frage...
     </h2>
     <p style="color: #57477c; font-size: 1.2rem; line-height: 1.6; margin-bottom: 2rem;">
     Willst du mein <span style="color: #e74c3c; font-weight: bold;">Valentinstagsdate</span> sein? 💕
     </p>
     <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1rem;">
     <button id="valentineYes" style="
     background: linear-gradient(90deg, #7F53AC 0%, #647DEE 100%);
     color: white;
     border: none;
     padding: 0.9rem 2.2rem;
     border-radius: 25px;
     font-size: 1.1rem;
     font-weight: bold;
     cursor: pointer;
     transition: all 0.3s;
     box-shadow: 0 4px 15px rgba(127, 83, 172, 0.3);
     flex-shrink: 0;
     " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
     Ja! 💕
     </button>
     <button id="valentineNein" style="
     background: #ffebee;
     color: #d32f2f;
     border: 2px solid #d32f2f;
     padding: 0.9rem 2.2rem;
     border-radius: 25px;
     font-size: 1.1rem;
     font-weight: bold;
     cursor: pointer;
     transition: all 0.3s;
     flex-shrink: 0;
     position: relative;
     " onmouseover="this.style.background='#ffcdd2'" onmouseout="this.style.background='#ffebee'">
     Nein
     </button>
     </div>
     <button id="valentineLater" style="
     background: white;
     color: #7F53AC;
     border: 2px solid #7F53AC;
     padding: 0.9rem 2.2rem;
     border-radius: 25px;
     font-size: 1.1rem;
     font-weight: bold;
     cursor: pointer;
     transition: all 0.3s;
     width: 100%;
     " onmouseover="this.style.background='#f8f3ff'" onmouseout="this.style.background='white'">
     Vielleicht Später
     </button>
     `;

     overlay.appendChild(popup);
     document.body.appendChild(overlay);

     const style = document.createElement('style');
     style.textContent = `
     @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
      }
     @keyframes slideUp {
      from { transform: translateY(50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
      }
     @keyframes flyOut {
      from { transform: translateX(0) rotateZ(0deg); opacity: 1; }
      to { transform: translateX(400px) rotateZ(45deg); opacity: 0; }
      }
     @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
      }
      `;
      document.head.appendChild(style);

      document.getElementById('valentineYes').onclick = function() {
      localStorage.setItem('valentineAnswered', 'true');
      alert('LesssGO! 💘💘💘💘');
      alert('Ich Liebe dich.🌹')
      clearTimeout(valentineTimeout);
      overlay.remove();
      };

      document.getElementById('valentineNein').onclick = function() {
      const neinBtn = document.getElementById('valentineNein');
      neinBtn.style.animation = 'flyOut 0.8s cubic-bezier(.25,.46,.45,.94) forwards';
      neinBtn.style.pointerEvents = 'none';
      };

      document.getElementById('valentineLater').onclick = function() {
      overlay.style.animation = 'fadeOut 0.4s ease-out forwards';
      setTimeout(() => {
      overlay.remove();
      clearTimeout(valentineTimeout);
      valentineTimeout = setTimeout(showValentinePopup, 1500);
      }, 400);
      };
      }

      // Popup beim Laden anzeigen (nach kurzer Verzögerung)
      window.addEventListener('load', function() {
      clearTimeout(valentineTimeout);
      valentineTimeout = setTimeout(showValentinePopup, 800);
      });

     */


    /* Jubiläums-/Kalenderfunktion */
    function updateAnniversary() {
        // Start-Datum: 21.06.2025
        const start = new Date(2025, 5, 21); // 0-basiert: 5 = Juni
        const now = new Date();
        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();
        let days = now.getDate() - start.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        let text = "Seit ";
        if (years > 0) text += years + (years === 1 ? " Jahr und " : " Jahren und ");
        if (months > 0) text += months + (months === 1 ? " Monat und " : " Monaten und ");
        text += days + (days === 1 ? " Tag" : " Tagen");
        text += ' zusammen <span class="heart-ani">♥</span>';

        document.getElementById("anniversaryCounter").innerHTML = text;
    }

    updateAnniversary();
    // Update anniversary counter at midnight each day
    (function scheduleMidnightUpdate() {
        const now = new Date();
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        setTimeout(() => {
            updateAnniversary();
            scheduleMidnightUpdate();
        }, tomorrow - now);
    })();

    // --- KALENDER BUTTON & KALENDER-ANSICHT ---
    const mainContainer = document.getElementById('mainContainer');
    const calendarContainer = document.getElementById('calendarContainer');
    const calendarBtn = document.getElementById('calendarBtn');

    let calendarVisible = false;

    function showCalendarView() {
        calendarVisible = true;
        mainContainer.style.display = 'none';
        calendarContainer.style.display = '';
        updateCalendarInfo();
        calendarBtn.textContent = '🏠';
        calendarBtn.setAttribute('title', 'Zurück zur Hauptseite');
        document.getElementById('mainFooter').style.display = 'none';
    }

    function showMainView() {
        calendarVisible = false;
        mainContainer.style.display = '';
        calendarContainer.style.display = 'none';
        calendarBtn.textContent = '📅';
        calendarBtn.setAttribute('title', 'Kalender anzeigen 📅');
        document.getElementById('mainFooter').style.display = '';
    }

    calendarBtn.onclick = function () {
        if (calendarVisible) showMainView();
        else showCalendarView();
    };

    // Geburtstags-Countdown modernisiert
    function birthdayCountdown(day, month) {
        const now = new Date();
        let next = new Date(now.getFullYear(), month - 1, day);
        if (
            now.getMonth() + 1 > month ||
            (now.getMonth() + 1 === month && now.getDate() > day)
        ) {
            next.setFullYear(now.getFullYear() + 1);
        }
        const diff = Math.ceil((next - now) / 1000 / 60 / 60 / 24);
        if (diff === 0) return "🎉 Heute!";
        if (diff === 1) return "in 1 Tag";
        return `in ${diff} Tagen`;
    }

    // Berechnung für Kalender-Ansicht
    function updateCalendarInfo() {
        // Jubiläum
        const start = new Date(2025, 5, 21); // 21.06.2025
        const now = new Date();
        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();
        let days = now.getDate() - start.getDate();
        if (days < 0) {
            months--;
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }
        let text = "";
        if (years > 0) text += years + (years === 1 ? " Jahr, " : " Jahren, ");
        if (months > 0) text += months + (months === 1 ? " Monat, " : " Monaten, ");
        text += days + (days === 1 ? " Tag" : " Tagen");
        text += ' zusammen <span class="heart-ani">♥</span>';
        document.getElementById('kalenderAnniversaryCounter').innerHTML = text;

        document.getElementById('myBdayCountdown').textContent = birthdayCountdown(25, 11);
        document.getElementById('herBdayCountdown').textContent = birthdayCountdown(3, 11);
        document.getElementById('valentineCountdown').textContent = birthdayCountdown(14, 2);
    }

    updateCalendarInfo();

    // ===== TOAST SYSTEM =====
    function showToast(msg) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = msg;
        container.appendChild(toast);
        setTimeout(() => {
            toast.classList.add('hiding');
            setTimeout(() => toast.remove(), TOAST_HIDE_MS);
        }, TOAST_DISPLAY_MS);
    }

    // ===== FAVOURITES =====
    function toggleFavorite(num, btn) {
        if (favorites.has(num)) {
            favorites.delete(num);
            btn.classList.remove('active');
            btn.title = 'Zu Favoriten hinzufügen';
            showToast('🗑️ Favorit entfernt');
        } else {
            favorites.add(num);
            btn.classList.add('active');
            btn.title = 'Aus Favoriten entfernen';
            showToast('❤️ Zu Favoriten hinzugefügt!');
        }
        btn.classList.add('popping');
        setTimeout(() => btn.classList.remove('popping'), 350);
        localStorage.setItem('lkfavorites', JSON.stringify([...favorites]));
        if (currentFilter === 'favorites') applyFilter();
    }

    // ===== FILTER =====
    function applyFilter() {
        const grid = document.getElementById('reasonsGrid');
        if (!grid) return;
        const cards = grid.querySelectorAll('.reason-card');
        let visibleCount = 0;
        cards.forEach(card => {
            const num = parseInt(card.dataset.num);
            const show = currentFilter !== 'favorites' || favorites.has(num);
            card.style.display = show ? '' : 'none';
            if (show) visibleCount++;
        });
        let noMsg = document.getElementById('noResultsMsg');
        if (!noMsg) {
            noMsg = document.createElement('div');
            noMsg.id = 'noResultsMsg';
            noMsg.className = 'no-results-msg';
            noMsg.textContent = 'Keine Favoriten gespeichert 💜';
            grid.appendChild(noMsg);
        }
        noMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentFilter = chip.dataset.filter;
            applyFilter();
        });
    });

    // ===== SCROLL TO TOP =====
    window.addEventListener('scroll', () => {
        document.getElementById('scrollTopBtn').classList.toggle('visible', window.scrollY > 300);
    });
    document.getElementById('scrollTopBtn').addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // ===== SURPRISE ME =====
    document.getElementById('surpriseBtn').addEventListener('click', () => {
        if (availableReasons.length === 0) return;
        const visibleNums = availableReasons.filter(n => {
            const card = document.querySelector(`.reason-card[data-num="${n}"]`);
            return card && card.style.display !== 'none';
        });
        if (visibleNums.length === 0) return;
        const pick = visibleNums[Math.floor(Math.random() * visibleNums.length)];
        openModal(pick);
        showToast('🎲 Überraschung!');
    });

    // ===== THEME SYSTEM =====
    function applyTheme(theme) {
        document.body.classList.remove('sunset-mode', 'rose-mode', 'ocean-mode');
        if (theme === 'night') document.body.classList.add('sunset-mode');
        else if (theme === 'rose') document.body.classList.add('rose-mode');
        else if (theme === 'ocean') document.body.classList.add('ocean-mode');
        currentTheme = theme;
        localStorage.setItem('lktheme', theme);
        const btn = document.getElementById('sunsetModeBtn');
        btn.textContent = THEME_ICONS[theme];
        btn.setAttribute('title', THEME_NEXT_LABELS[theme]);
    }
    applyTheme(currentTheme);
