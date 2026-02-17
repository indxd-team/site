// =============================================
// DARK/LIGHT MODE TOGGLE - START
// =============================================
const themeToggleCheckbox = document.getElementById('themeToggleCheckbox');
const body = document.body;

// Define logo URLs
const lightLogo = 'https://ik.imagekit.io/rizriz/indxd-logo-2025.png?updatedAt=1764646356408';
const darkLogo = 'https://ik.imagekit.io/rizriz/indxd-negative.bacgkorund.png?updatedAt=1764672764818';

// Function to update logos based on theme
function updateLogos() {
    const isDarkMode = body.classList.contains('dark-mode');
    const logoImgs = document.querySelectorAll('.logo img, .hero-logo img');
    const newLogoUrl = isDarkMode ? darkLogo : lightLogo;
    logoImgs.forEach(img => {
        img.src = newLogoUrl;
    });
}

// Check for saved theme preference or prefer-color-scheme
const savedTheme = localStorage.getItem('indxd-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial theme and checkbox state
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    body.classList.add('dark-mode');
    themeToggleCheckbox.checked = true;
}

// Update logos for initial theme
updateLogos();

// Toggle theme function
function toggleTheme() {
    body.classList.toggle('dark-mode');
    
    // Save preference
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('indxd-theme', isDarkMode ? 'dark' : 'light');
    
    // Update logos
    updateLogos();
    
    // Add transition class for smooth animation
    body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    
    // Force a reflow to ensure transition works
    void body.offsetWidth;
}

// Add change event listener to checkbox
themeToggleCheckbox.addEventListener('change', toggleTheme);
// =============================================
// DARK/LIGHT MODE TOGGLE - END
// =============================================

// =============================================
// INFO MODAL FUNCTIONALITY - START
// =============================================
// Add event listeners to "Read More" buttons
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const modalId = this.getAttribute('data-modal');
        openInfoModal(modalId);
    });
});

// Add event listeners to info buttons
document.getElementById('howToUseBtn').addEventListener('click', function() {
    openInfoModal('howToUseModal');
});

document.getElementById('rankingSystemBtn').addEventListener('click', function() {
    openInfoModal('rankingSystemModal');
});

function openInfoModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeInfoModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modals when clicking close button
document.querySelectorAll('[data-modal]').forEach(button => {
    if (button.classList.contains('modal-close')) {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            closeInfoModal(modalId);
        });
    }
});

// Close modals when clicking outside
document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            const modalId = this.id;
            if (modalId === 'howToUseModal' || modalId === 'rankingSystemModal') {
                closeInfoModal(modalId);
            }
        }
    });
});

// Close modals with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            const modalId = modal.id;
            if (modal.classList.contains('active') && 
                (modalId === 'howToUseModal' || modalId === 'rankingSystemModal')) {
                closeInfoModal(modalId);
            }
        });
    }
});
// =============================================
// INFO MODAL FUNCTIONALITY - END
// =============================================

// =============================================
// TRENDING RANKS FUNCTIONALITY - START
// =============================================
// Add event listeners to trending view all buttons
document.querySelectorAll('.trending-view-all-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.getAttribute('data-category');
        showCategoryResultsModal(category);
    });
});

// Update trending ranks based on actual click data
function updateTrendingRanks() {
    // Get top 3 sites for each of the 4 trending categories
    const trendingCategories = [
        'Sustainable Brands',
        'Privacy-First Tech', 
        'Verified News',
        'Knowledge Hubs'
    ];
    
    trendingCategories.forEach(category => {
        const categorySites = verifiedSites.filter(site => site.category === category);
        categorySites.sort((a, b) => b.clicks - a.clicks);
        
        // Update the trending list UI for this category
        const trendingList = document.querySelector(`.trending-list[style*="${getCategoryColor(category)}"]`);
        if (trendingList) {
            const items = trendingList.querySelectorAll('.trending-item');
            items.forEach((item, index) => {
                if (categorySites[index]) {
                    const nameEl = item.querySelector('.trending-name');
                    const clicksEl = item.querySelector('.trending-clicks');
                    
                    if (nameEl && clicksEl) {
                        nameEl.textContent = categorySites[index].name;
                        clicksEl.innerHTML = `<i class="fas fa-chart-line"></i> ${categorySites[index].clicks} clicks`;
                    }
                }
            });
        }
    });
}

function getCategoryColor(category) {
    const colorMap = {
        'Sustainable Brands': '#4CAF50',
        'Privacy-First Tech': '#2196F3',
        'Verified News': '#F44336',
        'Knowledge Hubs': '#9C27B0',
        'Social Impact': '#FF9800',
        'Creative Commons': '#009688',
        'Palestinian Liberation': '#000000',
        'Health & Wellness': '#E91E63',
        'Verified Connect': '#FF6B8B'
    };
    return colorMap[category] || '#8B5FBF';
}
// =============================================
// TRENDING RANKS FUNCTIONALITY - END
// =============================================

// =============================================
// SEARCH FUNCTIONALITY - START
// =============================================
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.querySelector('.search-input').value.toLowerCase().trim();
    
    if (query === '') {
        alert('Please enter a search term');
        return;
    }
    
    const results = verifiedSites.filter(site => 
        site.name.toLowerCase().includes(query) || 
        site.description.toLowerCase().includes(query) ||
        site.category.toLowerCase().includes(query) ||
        (site.keywords && site.keywords.toLowerCase().includes(query))
    );
    
    // Sort by clicks (descending) within each category
    const resultsByCategory = {};
    
    results.forEach(site => {
        if (!resultsByCategory[site.category]) {
            resultsByCategory[site.category] = [];
        }
        resultsByCategory[site.category].push(site);
    });
    
    // Sort each category's sites by clicks (descending)
    Object.keys(resultsByCategory).forEach(category => {
        resultsByCategory[category].sort((a, b) => b.clicks - a.clicks);
    });
    
    showSearchResultsModal(resultsByCategory, query);
});

// Global variables for load more functionality
let currentSearchResults = {};
let currentSearchQuery = '';
const resultsPerPage = 5;
let currentVisibleCounts = {};

function showSearchResultsModal(resultsByCategory, query) {
    const modal = document.getElementById('searchResultsModal');
    const modalBody = document.getElementById('searchResultsModalBody');
    const modalTitle = document.getElementById('searchResultsModalTitle');
    
    modalTitle.textContent = `Search Results for "${query}"`;
    
    if (Object.keys(resultsByCategory).length === 0) {
        modalBody.innerHTML = '<p style="text-align: center; color: #5f6368; padding: 40px;">No results found. Try different keywords or browse our pillars above.</p>';
    } else {
        // Store current results for load more functionality
        currentSearchResults = resultsByCategory;
        currentSearchQuery = query;
        currentVisibleCounts = {};
        
        let html = '';
        
        // Create a section for each category
        Object.keys(resultsByCategory).forEach(category => {
            const sites = resultsByCategory[category];
            const pillarClass = getPillarClass(category);
            
            // Initialize visible count for this category
            currentVisibleCounts[category] = resultsPerPage;
            
            // Get visible sites for this category
            const visibleSites = sites.slice(0, resultsPerPage);
            const remainingSites = sites.slice(resultsPerPage);
            
            // Special handling for Verified Connect category
            if (category === 'Verified Connect') {
                html += generateVerifiedConnectModalContent(sites);  // No page parameter
            } else {
                html += `
                    <div class="category-section" style="animation-delay: ${0.1 * Object.keys(resultsByCategory).indexOf(category)}s">
                        <div class="category-header">
                            <span class="category-title">${category}</span>
                            <span class="category-count">${sites.length}</span>
                        </div>
                        <div class="ranking-indicator">
                            <div><i class="fas fa-trophy"></i> Intra-Category Ranking</div>
                            <div><i class="fas fa-chart-line"></i> Sorted by clicks</div>
                        </div>
                `;
                
                visibleSites.forEach((site, index) => {
                    const domain = new URL(site.url).hostname;
                    const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
                    
                    html += generateSearchResultHTML(site, index, category, pillarClass, faviconUrl);
                });
                
                // Add load more button if there are more results
                if (remainingSites.length > 0) {
                    html += `
                        <button class="load-more-btn" data-category="${category}" onclick="loadMoreResults('${category}')">
                            Load More (${remainingSites.length} more)
                        </button>
                    `;
                }
                
                html += `</div>`;
            }
        });
        
        modalBody.innerHTML = html;
    }
    
    openSearchModal();
}

// Updated: generateVerifiedConnectModalContent now outputs all families without pagination
function generateVerifiedConnectModalContent(families) {
    let html = `
        <div class="category-section" style="animation-delay: 0.1s">
            <div class="category-header">
                <span class="category-title">Verified Connect</span>
                <span class="category-count">${families.length}</span>
            </div>
            <div class="verified-connect-intro">
                <h3>Direct Support for Verified Families</h3>
                <p>These are personally verified families in need of support. We connect you directly to their verified fundraising pages. <strong>We do NOT collect donations</strong> - all support goes directly to the families through their chosen platforms.</p>
            </div>
            <div class="family-cards-grid">
    `;
    
    families.forEach((family) => {
        html += `
            <div class="family-card">
                <img src="${family.imageUrl}" alt="${family.name}" class="family-image">
                <div class="family-content">
                    <div class="verified-badge">
                        <i class="fas fa-check-circle"></i> Personally Verified
                    </div>
                    <h4 class="family-name">${family.name}</h4>
                    <div class="family-location">${family.location}</div>
                    <p class="family-story">${family.story}</p>
                    <div class="family-actions">
                        <a href="${family.url}" target="_blank" class="donation-btn" onclick="incrementClicks('${family.name}')">
                            <i class="fas fa-heart"></i> Support This Family
                        </a>
                        <div class="family-status">
                            <i class="fas fa-info-circle"></i> Direct donation link - no intermediaries
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
            <div style="text-align: center; margin-top: 25px; padding: 20px; background: rgba(255, 107, 139, 0.05); border-radius: 8px; border: 1px dashed rgba(255, 107, 139, 0.3);">
                <p style="color: #5f6368; font-size: 0.9rem;">
                    <i class="fas fa-exclamation-circle" style="color: #FF6B8B; margin-right: 8px;"></i>
                    <strong>Important:</strong> We only verify families and provide direct links to their fundraising pages. We do not handle any donations or take any percentage. All support goes directly to the families through their chosen platforms.
                </p>
            </div>
        </div>
    `;
    
    return html;
}

// Helper function to generate search result HTML
function generateSearchResultHTML(site, index, category, pillarClass, faviconUrl) {
    return `
        <div class="search-result-item" onclick="window.open('${site.url}', '_blank')" style="animation-delay: ${0.05 * index}s">
            <img src="${faviconUrl}" alt="${site.name} favicon" class="search-result-favicon">
            <div class="search-result-content">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px; flex-wrap: wrap;">
                    <h4 style="flex: 1 1 100%; margin-bottom: 8px;">${site.name}</h4>
                    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <span class="category-badge ${pillarClass}">${site.category}</span>
                        <span style="background: #8B5FBF; color: white; padding: 3px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; white-space: nowrap;">
                            Rank ${index + 1}
                        </span>
                    </div>
                </div>
                <p>${site.description}</p>
                <div style="margin-top: 12px; font-size: 0.8rem; color: #8B5FBF; display: flex; flex-direction: column; gap: 6px;">
                    <span style="display: flex; align-items: center; gap: 8px;"><i class="fas fa-chart-line"></i> ${site.clicks} clicks</span>
                    <span style="display: flex; align-items: center; gap: 8px;"><i class="fas fa-users"></i> Community ranking</span>
                    <span style="display: flex; align-items: center; gap: 8px;"><i class="fas fa-tag"></i> DXD Tag: ${getDXDTag(category)}</span>
                </div>
                <a href="${site.url}" target="_blank" class="visit-website" onclick="event.stopPropagation(); incrementClicks('${site.name}')">
                    Visit Website <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    `;
}

// Load more results function (needs to be global for inline onclick)
window.loadMoreResults = function(category) {
    // This function is called from the load more button in search results
    // We need to get the current sites for this category from currentSearchResults
    const sites = currentSearchResults[category];
    const nextVisible = currentVisibleCounts[category] + resultsPerPage;
    const newSites = sites.slice(currentVisibleCounts[category], nextVisible);
    
    // Find the category section
    const categorySection = document.querySelector(`.category-section:has(.category-title:contains('${category}'))`);
    if (categorySection) {
        newSites.forEach((site, idx) => {
            const domain = new URL(site.url).hostname;
            const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
            const pillarClass = getPillarClass(category);
            const siteHtml = generateSearchResultHTML(site, currentVisibleCounts[category] + idx, category, pillarClass, faviconUrl);
            categorySection.insertAdjacentHTML('beforeend', siteHtml);
        });
        
        currentVisibleCounts[category] = nextVisible;
        
        // Update or remove load more button
        const remaining = sites.length - nextVisible;
        const loadMoreBtn = categorySection.querySelector('.load-more-btn');
        if (remaining > 0) {
            loadMoreBtn.innerHTML = `Load More (${remaining} more)`;
        } else {
            loadMoreBtn.remove();
        }
    }
}
// =============================================
// SEARCH FUNCTIONALITY - END
// =============================================

// =============================================
// PILLAR CLICK FUNCTIONALITY - START
// =============================================
document.querySelectorAll('.pillar-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Don't trigger if the button was clicked (handled separately)
        if (!e.target.classList.contains('pillar-button')) {
            const category = this.getAttribute('data-category');
            showCategoryResultsModal(category);
        }
    });
});

// Add event listeners for the new "View [Category] Category" buttons
document.querySelectorAll('.pillar-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the card click event from firing
        const category = this.getAttribute('data-category');
        showCategoryResultsModal(category);
    });
});

// Add event listeners for quick links
document.querySelectorAll('.quick-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.getAttribute('data-category');
        showCategoryResultsModal(category);
    });
});

// Variables for category view load more
let currentCategorySites = [];
let currentCategoryName = '';
const categoryResultsPerPage = 5;
let currentCategoryVisibleCount = 0;

function showCategoryResultsModal(category) {
    const modal = document.getElementById('searchResultsModal');
    const modalBody = document.getElementById('searchResultsModalBody');
    const modalTitle = document.getElementById('searchResultsModalTitle');
    
    modalTitle.textContent = `${category}`;
    
    currentCategorySites = verifiedSites.filter(site => site.category === category);
    currentCategoryName = category;
    
    // Special handling for Verified Connect
    if (category === 'Verified Connect') {
        modalBody.innerHTML = generateVerifiedConnectModalContent(currentCategorySites); // No page
        openSearchModal();
        return;
    }
    
    // Sort by clicks (descending) - intra-category competition
    currentCategorySites.sort((a, b) => b.clicks - a.clicks);
    
    // Initialize visible count
    currentCategoryVisibleCount = categoryResultsPerPage;
    const visibleSites = currentCategorySites.slice(0, categoryResultsPerPage);
    const remainingSites = currentCategorySites.slice(categoryResultsPerPage);
    
    let html = '';
    
    if (currentCategorySites.length === 0) {
        html = '<p style="text-align: center; color: #5f6368; padding: 40px;">No websites found in this category yet.</p>';
    } else {
        // Add ranking indicator
        html += `
            <div class="ranking-indicator">
                <div><i class="fas fa-trophy"></i> Intra-Category Competition</div>
                <div><i class="fas fa-chart-line"></i> Ranked by clicks</div>
                <div><i class="fas fa-tag"></i> DXD Tag: ${getDXDTag(category)}</div>
            </div>
        `;
        
        visibleSites.forEach((site, index) => {
            html += generateCategoryResultHTML(site, index, category);
        });
        
        // Add load more button if there are more results
        if (remainingSites.length > 0) {
            html += `
                <button class="load-more-btn" onclick="loadMoreCategoryResults()">
                    Load More (${remainingSites.length} more)
                </button>
            `;
        }
    }
    
    modalBody.innerHTML = html;
    openSearchModal();
}

// Function to load more category results
window.loadMoreCategoryResults = function() {
    const nextVisible = currentCategoryVisibleCount + categoryResultsPerPage;
    const remainingSites = currentCategorySites.slice(currentCategoryVisibleCount, nextVisible);
    
    let newHtml = '';
    remainingSites.forEach((site, index) => {
        const globalIndex = currentCategoryVisibleCount + index;
        newHtml += generateCategoryResultHTML(site, globalIndex, currentCategoryName);
    });
    
    // Insert new results before the load more button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.insertAdjacentHTML('beforebegin', newHtml);
    }
    
    // Update visible count
    currentCategoryVisibleCount = nextVisible;
    
    // Update or remove load more button
    const remainingCount = currentCategorySites.length - nextVisible;
    if (remainingCount > 0) {
        loadMoreBtn.innerHTML = `Load More (${remainingCount} more)`;
    } else {
        loadMoreBtn.remove();
    }
}

// Helper function to generate category result HTML
function generateCategoryResultHTML(site, index, category) {
    const pillarClass = getPillarClass(site.category);
    const domain = new URL(site.url).hostname;
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
    
    // Different styling for top 3 rankings
    let rankClass = '';
    let rankIcon = '';
    if (index === 0) {
        rankClass = 'style="background: linear-gradient(90deg, #FFD700, #FFEC8B); color: #8B7500;"';
        rankIcon = '🥇 ';
    } else if (index === 1) {
        rankClass = 'style="background: linear-gradient(90deg, #C0C0C0, #E8E8E8); color: #696969;"';
        rankIcon = '🥈 ';
    } else if (index === 2) {
        rankClass = 'style="background: linear-gradient(90deg, #CD7F32, #E8B878); color: #8B4513;"';
        rankIcon = '🥉 ';
    }
    
    return `
        <div class="search-result-item" onclick="window.open('${site.url}', '_blank')" style="animation-delay: ${0.05 * index}s">
            <img src="${faviconUrl}" alt="${site.name} favicon" class="search-result-favicon">
            <div class="search-result-content">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px; flex-wrap: wrap;">
                    <h4 style="flex: 1 1 100%; margin-bottom: 8px;">${site.name}</h4>
                    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <span class="category-badge ${pillarClass}">${site.category}</span>
                        <span ${rankClass} style="padding: 3px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; white-space: nowrap;">
                            ${rankIcon}Rank ${index + 1}
                        </span>
                    </div>
                </div>
                <p>${site.description}</p>
                <div style="margin-top: 12px; font-size: 0.8rem; color: #8B5FBF; display: flex; flex-direction: column; gap: 6px;">
                    <span style="display: flex; align-items: center; gap: 8px;"><i class="fas fa-chart-line"></i> ${site.clicks} clicks</span>
                    <span style="display: flex; align-items: center; gap: 8px;"><i class="fas fa-users"></i> Community ranking</span>
                    <span style="display: flex; align-items: center; gap: 8px;"><i class="fas fa-tag"></i> DXD Tag: ${getDXDTag(category)}</span>
                </div>
                <a href="${site.url}" target="_blank" class="visit-website" onclick="event.stopPropagation(); incrementClicks('${site.name}')">
                    Visit Website <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    `;
}
// =============================================
// PILLAR CLICK FUNCTIONALITY - END
// =============================================

// =============================================
// CLICK TRACKING FUNCTIONALITY - START
// =============================================
window.incrementClicks = function(siteName) {
    // Find the site in our data
    const siteIndex = verifiedSites.findIndex(site => site.name === siteName);
    if (siteIndex !== -1) {
        // Increment click count
        verifiedSites[siteIndex].clicks += 1;
        
        // Update localStorage to persist clicks
        localStorage.setItem('indxdSiteClicks', JSON.stringify(verifiedSites));
        
        // Update trending ranks display
        updateTrendingRanks();
        
        // Show a subtle notification (optional)
        showClickNotification(siteName, verifiedSites[siteIndex].clicks);
    }
}

function showClickNotification(siteName, newCount) {
    // Create a subtle notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #8B5FBF;
        color: white;
        padding: 10px 15px;
        border-radius: 8px;
        font-size: 0.9rem;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(139, 95, 191, 0.3);
    `;
    
    if (body.classList.contains('dark-mode')) {
        notification.style.background = '#9d6bd6';
    }
    
    notification.innerHTML = `
        <i class="fas fa-mouse-pointer" style="margin-right: 8px;"></i>
        Click recorded for ${siteName} (${newCount} total)
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
// =============================================
// CLICK TRACKING FUNCTIONALITY - END
// =============================================

// =============================================
// FAQ FUNCTIONALITY - START
// =============================================
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isActive = this.classList.contains('active');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-question').forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('active');
        });
        
        // If this wasn't active, open it
        if (!isActive) {
            this.classList.add('active');
            answer.classList.add('active');
        }
    });
});
// =============================================
// FAQ FUNCTIONALITY - END
// =============================================

// =============================================
// MODAL FUNCTIONALITY - START
// =============================================
function openSearchModal() {
    const modal = document.getElementById('searchResultsModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSearchResultsModal() {
    const modal = document.getElementById('searchResultsModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('searchResultsModalClose').addEventListener('click', function() {
    closeSearchResultsModal();
});

document.getElementById('searchResultsModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeSearchResultsModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSearchResultsModal();
    }
});
// =============================================
// MODAL FUNCTIONALITY - END
// =============================================

// =============================================
// UTILITY FUNCTIONS - START
// =============================================
function getPillarClass(category) {
    const pillarMap = {
        'Sustainable Brands': 'pillar-sustainable',
        'Privacy-First Tech': 'pillar-privacy',
        'Verified News': 'pillar-news',
        'Knowledge Hubs': 'pillar-knowledge',
        'Social Impact': 'pillar-social',
        'Creative Commons': 'pillar-creative',
        'Palestinian Liberation': 'pillar-palestine',
        'Health & Wellness': 'pillar-health',
        'Verified Connect': 'pillar-connect'
    };
    return pillarMap[category] || 'pillar-sustainable';
}

function getDXDTag(category) {
    const tagMap = {
        'Sustainable Brands': 'Sustainable',
        'Privacy-First Tech': 'Privacy',
        'Verified News': 'News',
        'Knowledge Hubs': 'Knowledge',
        'Social Impact': 'Social',
        'Creative Commons': 'Creative',
        'Palestinian Liberation': 'Palestine',
        'Health & Wellness': 'Health',
        'Verified Connect': 'Connect'
    };
    return tagMap[category] || category;
}

// Load saved clicks from localStorage
function loadSavedClicks() {
    const savedClicks = localStorage.getItem('indxdSiteClicks');
    if (savedClicks) {
        try {
            const savedData = JSON.parse(savedClicks);
            // Merge saved clicks with our base data
            savedData.forEach(savedSite => {
                const index = verifiedSites.findIndex(site => site.name === savedSite.name);
                if (index !== -1) {
                    verifiedSites[index].clicks = savedSite.clicks;
                }
            });
        } catch (e) {
            console.error('Error loading saved clicks:', e);
        }
    }
    
    // Update trending ranks display with loaded data
    updateTrendingRanks();
}

// Initialize saved clicks on load
window.addEventListener('load', loadSavedClicks);
// =============================================
// UTILITY FUNCTIONS - END
// =============================================

// =============================================
// NAVIGATION & SCROLL FUNCTIONALITY - START
// =============================================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                nav.classList.remove('active');
                burger.classList.remove('toggle');
                
                // Smooth scroll to section
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const backToTop = document.getElementById('backToTop');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// =============================================
// NAVIGATION & SCROLL FUNCTIONALITY - END
// =============================================

// =============================================
// NETWORK ANIMATION - START
// =============================================
const canvas = document.getElementById('networkCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    initNodes();
}

let nodes = [];

function initNodes() {
    nodes = [];
    const nodeCount = 40;
    
    for (let i = 0; i < nodeCount; i++) {
        const radius = Math.random() * 3 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 0.8;
        const speedY = (Math.random() - 0.5) * 0.8;
        
        nodes.push({ x, y, radius, speedX, speedY });
    }
}

function drawConnections() {
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                const isDarkMode = body.classList.contains('dark-mode');
                ctx.strokeStyle = isDarkMode 
                    ? `rgba(180, 180, 180, ${0.2 * (1 - distance/150)})`
                    : `rgba(100, 100, 100, ${0.2 * (1 - distance/150)})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    nodes.forEach(node => {
        node.x += node.speedX;
        node.y += node.speedY;
        
        if (node.x <= 0 || node.x >= canvas.width) node.speedX *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.speedY *= -1;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        const isDarkMode = body.classList.contains('dark-mode');
        ctx.fillStyle = isDarkMode ? 'rgba(180, 180, 180, 0.7)' : 'rgba(100, 100, 100, 0.7)';
        ctx.fill();
    });
    
    drawConnections();
    requestAnimationFrame(animate);
}

window.addEventListener('load', () => {
    resizeCanvas();
    animate();
});

window.addEventListener('resize', resizeCanvas);
// =============================================
// NETWORK ANIMATION - END
// =============================================