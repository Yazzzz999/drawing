class DrawingOverlay {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = 0;
        this.canvas.style.left = 0;
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none'; // Allows click-through
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        document.body.appendChild(this.canvas);
    }

    drawSquare(x, y, size, color = 'black', filled = true) {
        this.context.fillStyle = color;
        this.context.strokeStyle = color;
        if (filled) {
            this.context.fillRect(x, y, size, size);
        } else {
            this.context.strokeRect(x, y, size, size);
        }
    }

    drawCircle(x, y, radius, color = 'black', filled = true) {
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2);
        this.context.fillStyle = color;
        this.context.strokeStyle = color;
        if (filled) {
            this.context.fill();
        } else {
            this.context.stroke();
        }
    }

    drawLine(x1, y1, x2, y2, color = 'black', lineWidth = 1) {
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.strokeStyle = color;
        this.context.lineWidth = lineWidth;
        this.context.stroke();
    }

    drawText(text, x, y, font = '16px Arial', color = 'black') {
        this.context.font = font;
        this.context.fillStyle = color;
        this.context.fillText(text, x, y);
    }

    clearAll() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function create_overlay() {
    return new DrawingOverlay();
}
