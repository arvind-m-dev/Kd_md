// Reader text size, font and line width (the "Text" menu, components/library/reader-settings.tsx).
// Isomorphic: the script below is inlined in <head> so pages render at the chosen size from the first paint
// (no jump, and "continue reading" resumes at the right place).

export const READER_PREFS_KEY = "kd-reader-prefs";

export const READER_SCRIPT = `try{var p=JSON.parse(localStorage.getItem("${READER_PREFS_KEY}")||"{}"),d=document.documentElement.dataset;if(p.size)d.readerSize=p.size;if(p.width)d.readerWidth=p.width;if(p.font)d.readerFont=p.font}catch(e){}`;
