const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName){
    
    // return bandName.replace(/^(a |an |the )/i, '').trim();

//     is a regular expression that does the following:

// Regex pattern: /^(a |an |the )/i

// ^ ensures that we match the articles only if they appear at the beginning of bandName.
// (a |an |the ) matches any of the words "a," "an," or "the" followed by a space.
// /i makes the regex case-insensitive, so it will match "The," "the," "A," "a," etc.
// Replace function: .replace(...)

// This function replaces the matched article (if found) with an empty string '', effectively removing it.
// Trim function: .trim()

// After removing the article, .trim() removes any extra spaces at the beginning or end of the string to keep it clean.
return bandName.replace(/^(a |an |the )/i , '').trim();
}

const sortedBands = bands.sort((a,b) => strip(a).localeCompare(strip(b)));


// The expression stripArticle(a).localeCompare(stripArticle(b)) is used to compare two band names, a and b, after removing any leading articles ("a," "an," or "the") from them. Here’s a breakdown of each part:

// stripArticle(a) and stripArticle(b):

// These calls use the stripArticle function to remove the leading articles from the band names.
// For example, if a = "The Plot in You", then stripArticle(a) would return "Plot in You" (removing "The ").
// localeCompare():

// localeCompare() is a JavaScript method for comparing two strings in a way that respects language-specific rules (for sorting alphabetically).
// It returns:
// -1 if the first string should appear before the second in the sorted order,
// 1 if the first string should appear after the second, and
// 0 if the two strings are equivalent in terms of order.
// How localeCompare() is used here:

// stripArticle(a).localeCompare(stripArticle(b)) compares the two cleaned-up band names.
// By returning -1, 0, or 1, it instructs sort on how to position a relative to b in the sorted array.

const bandList = document.getElementById('band');

sortedBands.forEach(band =>{
    const li = document.createElement('li');
    li.textContent = band;
    
    bandList.appendChild(li);
})