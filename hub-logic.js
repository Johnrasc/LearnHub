/**
 * LEARNHUB LITERARY GRAPHICS ENGINE
 * Modern Production Static Scripting Sub-Layer // RE-CORE v4.4
 */

// 1. Core Window Mount Lifecycle Monitor
window.addEventListener('load', () => {
    const entryLoader = document.getElementById('loader');
    if (entryLoader) {
        entryLoader.style.opacity = '0';
        // Remove completely from pointer checking layers after transition window
        setTimeout(() => {
            entryLoader.style.display = 'none';
        }, 550);
    }
});

// 2. Intercept and Transition Structural Routing Actions
document.addEventListener('DOMContentLoaded', () => {
    // Highly accurate selector catching both standard action and split variants
    const structuralQuizLinks = document.querySelectorAll('.primary-action');
    const backgroundOverlay = document.getElementById('quiz-loader');

    structuralQuizLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const documentTargetDestination = this.getAttribute('href');

            // Verification check: ensure link has a valid path variable and is not a default anchor
            if (documentTargetDestination && documentTargetDestination !== '#') {
                event.preventDefault();

                if (backgroundOverlay) {
                    backgroundOverlay.style.display = 'flex';
                    // Force a micro-tick hardware layout flush to guarantee transition fires properly
                    void backgroundOverlay.offsetWidth; 
                    backgroundOverlay.style.opacity = '1';
                }

                // Smooth out editorial visual flow with brief synthetic scheduling
                setTimeout(() => {
                    window.location.href = documentTargetDestination;
                }, 950);
            }
        });
    });
});

// 3. Document Layer Global State Adjustments
window.addEventListener('pageshow', (event) => {
    // Check if the page is loading directly from back/forward structural caches
    if (event.persisted) {
        const backgroundOverlay = document.getElementById('quiz-loader');
        if (backgroundOverlay) {
            backgroundOverlay.style.opacity = '0';
            setTimeout(() => {
                backgroundOverlay.style.display = 'none';
            }, 300);
        }
    }
});

// 4. Classification Deck Sorting State Controller
function filterSyllabiClassification(selectedClassificationScope) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const activeDocumentSheets = document.querySelectorAll('.document-sheet');

    // Reset current active presentation highlights inside filter track
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Handle direct DOM interactions or contextual event hooks safely
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }

    activeDocumentSheets.forEach(sheet => {
        const handlesMidtermData = sheet.classList.contains('midterm-card');
        const handlesPrefinalData = sheet.classList.contains('prefinals-card');
        const handlesFinalsData = sheet.classList.contains('finals-card');

        // FIXED: Expanded structural configuration mapping for the Finals matrix
        const mapAll = (selectedClassificationScope === 'all');
        const mapMidterm = (selectedClassificationScope === 'midterm' && handlesMidtermData);
        const mapPrefinal = (selectedClassificationScope === 'prefinals' && handlesPrefinalData);
        const mapFinals = (selectedClassificationScope === 'finals' && handlesFinalsData);

        if (mapAll || mapMidterm || mapPrefinal || mapFinals) {
            sheet.style.display = "flex";
            requestAnimationFrame(() => {
                sheet.style.opacity = "1";
                sheet.style.transform = "scale(1)";
            });
        } else {
            sheet.style.opacity = "0";
            sheet.style.transform = "scale(0.99)";
            sheet.style.display = "none";
        }
    });
}

// 5. System Action Registry Hub Subsystem
function toggleMenu(subjectIdentifierName) {
    console.log(`[PRINT DESK]: Verifying dataset parameters for -> "${subjectIdentifierName}"`);
    alert(`[METRICS CLEAN]: Syllabus records for "${subjectIdentifierName}" have passed internal validation checks.`);
}

console.log(
    "%c LEARNHUB JOURNAL // FABRIC RE-CORE ACTIVE ", 
    "color: #1c1d1f; font-weight: bold; background: #fbf9f4; padding: 4px 8px; border: 1px solid rgba(28,29,31,0.1);"
);
