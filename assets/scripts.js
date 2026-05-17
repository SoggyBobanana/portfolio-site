async function loadProject(projectId){
  try{
    const res = await fetch('projects/projects.json');
    const data = await res.json();
    const info = data[projectId] || {};
    const repoLink = document.getElementById('repoLink');
    const liveLink = document.getElementById('liveLink');
    const embedContainer = document.getElementById('embedContainer');

    if(repoLink){
      if(info.repoUrl) { repoLink.href = info.repoUrl; repoLink.textContent = 'View repository'; }
      else { repoLink.href = '#'; repoLink.textContent = 'Repository URL (not set)'; }
    }

    if(liveLink){
      if(info.liveUrl) { liveLink.href = info.liveUrl; liveLink.textContent = 'Open running site'; }
      else { liveLink.href = '#'; liveLink.textContent = 'Live URL (not set)'; }
    }

    if(embedContainer){
      embedContainer.innerHTML = '';
      if(info.liveUrl){
        const iframe = document.createElement('iframe');
        iframe.src = info.liveUrl;
        iframe.style.width = '100%';
        iframe.style.height = '600px';
        iframe.style.border = '1px solid rgba(16,24,40,0.06)';
        embedContainer.appendChild(iframe);
      } else {
        embedContainer.textContent = 'Live preview not available — set `liveUrl` in projects/projects.json.';
      }
    }
  }catch(e){
    console.error('Failed to load project config', e);
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  const el = document.querySelector('[data-project]');
  if(el) loadProject(el.getAttribute('data-project'));
});
