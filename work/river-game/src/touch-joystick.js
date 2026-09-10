export class TouchJoystick {
  constructor(element, enabled) {
    this.element = element; this.enabled = enabled;
    this.thumb = element.querySelector('.joystick-thumb');
    this.pointerId = null; this.x = this.y = 0;
    element.addEventListener('pointerdown', event => {
      if (event.button !== 0 || this.pointerId !== null || !this.enabled()) return;
      event.preventDefault();
      const bounds = element.getBoundingClientRect();
      this.centerX = bounds.left + bounds.width / 2; this.centerY = bounds.top + bounds.height / 2;
      this.radius = Math.max(1, (bounds.width - this.thumb.offsetWidth) / 2 - 5);
      this.pointerId = event.pointerId; element.setPointerCapture(event.pointerId);
      element.classList.add('engaged'); this.update(event);
    });
    element.addEventListener('pointermove', event => {
      if (event.pointerId !== this.pointerId) return;
      event.preventDefault(); this.update(event);
    });
    for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) {
      element.addEventListener(type, event => { if (event.pointerId === this.pointerId) this.reset(); });
    }
    element.addEventListener('contextmenu', event => event.preventDefault());
  }
  update(event) {
    if (!this.enabled()) { this.reset(); return; }
    const dx = event.clientX - this.centerX, dy = event.clientY - this.centerY;
    const distance = Math.hypot(dx, dy), travel = Math.min(distance, this.radius);
    // A small dead zone prevents drift; the remaining travel controls speed.
    const strength = Math.max(0, (travel / this.radius - .12) / .88);
    this.x = distance ? dx / distance * strength : 0;
    this.y = distance ? dy / distance * strength : 0;
    this.thumb.style.transform = `translate(${distance ? dx / distance * travel : 0}px,${distance ? dy / distance * travel : 0}px)`;
  }
  reset() {
    const pointerId = this.pointerId;
    this.pointerId = null; this.x = this.y = 0;
    this.thumb.style.transform = ''; this.element.classList.remove('engaged');
    if (pointerId !== null && this.element.hasPointerCapture(pointerId)) this.element.releasePointerCapture(pointerId);
  }
}
