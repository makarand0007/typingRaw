// Small JS helpers to support the main HTML (`index.html`)
document.addEventListener('DOMContentLoaded', () => {
   const actionBtn = document.getElementById('actionBtn');
   const title = document.getElementById('title');
   const desc = document.getElementById('desc');

   if (actionBtn && title && desc) {
      actionBtn.addEventListener('click', () => {
         title.textContent = 'Practice: Read carefully';
         desc.textContent = 'Tip: Pay attention to double letters and similar-looking words.कळयाने होताले आढे कळचे पहाजे';
         actionBtn.textContent = 'Done';
         actionBtn.disabled = true;
      });
   }

   // Simple helper: if there is a long plain-text list, wrap it in a <pre> for readability
   const rawListNode = Array.from(document.body.childNodes).find(n => n.nodeType === Node.TEXT_NODE && /#from\s*form|Common Mistake|Correct/.test(n.textContent || ''));
   if (rawListNode) {
      const pre = document.createElement('pre');
      pre.className = 'word-list';
      pre.textContent = rawListNode.textContent.trim();
      rawListNode.parentNode.insertBefore(pre, rawListNode);
      rawListNode.parentNode.removeChild(rawListNode);
   }
});