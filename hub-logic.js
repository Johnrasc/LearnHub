/**
 * LEARNHUB LITERARY GRAPHICS ENGINE
 * Modern Production Static Scripting Sub-Layer
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

                // Wait for editorial animation progress circle state to comfortably complete
                setTimeout(() => {
                    window.location.href = documentTargetDestination;
                }, 1300);
            }
        });
    });
});

// 3. High-Performance Text Filter Engine
function filterCards() {
    const mechanicalQueryInput = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeDocumentSheets = document.querySelectorAll('.quiz-sheet-card');
    
    activeDocumentSheets.forEach(sheet => {
        const structuralTitle = sheet.querySelector('.sheet-body h3').innerText.toLowerCase();
        const structuralDescription = sheet.querySelector('.sheet-body p').innerText.toLowerCase();
        const classificationTag = sheet.querySelector('.classification-tag').innerText.toLowerCase();

        // Cross-examine text strings for matching input signatures
        const lookupSuccess = structuralTitle.includes(mechanicalQueryInput) || 
                              structuralDescription.includes(mechanicalQueryInput) || 
                              classificationTag.includes(mechanicalQueryInput);

        if (lookupSuccess) {
            sheet.style.display = "flex";
            // Clean framework visibility pass mapping
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

// 4. Tab Classification Pipeline Engine
function filterTerm(selectedClassificationScope) {
    const activeDocumentSheets = document.querySelectorAll('.quiz-sheet-card');
    const dynamicTabControls = document.querySelectorAll('.tab-pill');
    
    // Manage active visual state rules cleanly on tab components
    dynamicTabControls.forEach(pill => pill.classList.remove('active'));
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }

    activeDocumentSheets.forEach(sheet => {
        const handlesMidtermData = sheet.classList.contains('midterm-card');
        const handlesPrefinalData = sheet.classList.contains('prefinals-card');

        const mapAll = (selectedClassificationScope === 'all');
        const mapMidterm = (selectedClassificationScope === 'midterm' && handlesMidtermData);
        const mapPrefinal = (selectedClassificationScope === 'prefinals' && handlesPrefinalData);

        if (mapAll || mapMidterm || mapPrefinal) {
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
    "color: #1c1d1f; font-weight: bold; font-family: monospace; font-size: 13px; background: #fbf9f4; padding: 6px 12px; border: 1px solid rgba(0,0,0,0.1);"
);
