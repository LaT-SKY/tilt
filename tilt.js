function handleObjectTilt(event) {
	const obj = event.currentTarget;
	if (!obj) return;
	
	const rect = obj.getBoundingClientRect();
	const centerX = rect.left + rect.width / 2;
	const centerY = rect.top + rect.height / 2;
	
	const mouseX = event.clientX - centerX;
	const mouseY = event.clientY - centerY;
	
	// 倾斜角
	const rotateX = (mouseY / rect.height) * -15;
	const rotateY = (mouseX / rect.width) * 15;
	
	// z轴运动
	const translateZ = Math.abs(mouseX) + Math.abs(mouseY);
	
	obj.style.transform = `
        perspective(1000px)
        rotateX(${Math.max(-8, Math.min(8, rotateX))}deg)
        rotateY(${Math.max(-8, Math.min(8, rotateY))}deg)
        translateZ(${Math.min(20, translateZ * 0.1)}px)
        scale(1.05)
    `;
}

function resetTilt(event) {
	const obj = event.currentTarget;
	
	obj.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateZ(0px)
        scale(1)
    `;
}