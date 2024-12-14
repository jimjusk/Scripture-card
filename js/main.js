document.addEventListener('DOMContentLoaded', () => {
  const helpBtn = document.getElementById('helpBtn');
  const installDetail = document.getElementById('installDetail');
  
  helpBtn.addEventListener('click', () => {
    installDetail.classList.toggle('expanded');
    helpBtn.textContent = installDetail.classList.contains('expanded') 
      ? '收起详细说明' 
      : '查看详细说明';
  });
}); 