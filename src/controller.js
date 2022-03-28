(function exportController() {

    class Controller {
        constructor(ship) {
            this.ship = ship

            this.initialiseSea();
            this.renderHUD();

            document.querySelector('#sailbutton').addEventListener('click', () => {
                this.setSail();
            });
        }
        initialiseSea() {
            const backgrounds = [
                './images/water0.png',
                './images/water1.png',
            ];
            let backgroundIndex = 0;
            window.setInterval(() => {
                document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
                backgroundIndex += 1;
            }, 1000);
        }

        renderHUD() {
            const ship = this.ship;
            let currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            let currentPortName = ship.itinerary.ports[currentPortIndex].name;

            let currentPortHUD = document.createElement('div');
            currentPortHUD.id = "current-port";
            currentPortHUD.innerHTML = `Current Port: ${currentPortName}`;

            let nextPortIndex = currentPortIndex + 1;
            let nextPortName = ship.itinerary.ports[nextPortIndex].name;

            let nextPortHUD = document.createElement('div');
            nextPortHUD.id = "next-port";
            nextPortHUD.innerHTML = `Next Port: ${nextPortName}`;  
            
            document.querySelector('#HUD').appendChild(currentPortHUD);
            document.querySelector('#HUD').appendChild(nextPortHUD);
        }

        HUDReset() {
            document.querySelector('#HUD').removeChild(currentPortHUD);
            document.querySelector('#HUD').removeChild(nextPortHUD);
        }
        
    

        renderPorts(ports) {
            const portsElement = document.querySelector('#ports');
            portsElement.style.width = '0px';

            ports.forEach((port, index) => {
                const newPortElement = document.createElement('div');
                newPortElement.className = 'port';

                newPortElement.dataset.portName = port.name;
                newPortElement.dataset.portIndex = index;


                portsElement.appendChild(newPortElement);

                const portsElementWidth = parseInt(portsElement.style.width, 10);
                portsElement.style.width = `${portsElementWidth + 256}px`;
            });
        }

        renderShip() {
            const ship = this.ship

            const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
            const shipElement = document.querySelector('#ship');
            
            shipElement.style.top = `${portElement.offsetTop + 32}px`;
            shipElement.style.left = `${portElement.offsetLeft - 32}px`;

        }

        setSail() {
            const ship = this.ship

            const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const currentPortName = ship.itinerary.ports[currentPortIndex].name;

            const nextPortIndex = currentPortIndex + 1;
            const nextPortName = ship.itinerary.ports[currentPortIndex+1].name;
            const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
            
            if (!nextPortElement) {
                return alert('End of the Line!');
            }

            this.renderMessage(`Now departing ${currentPortName}`);

            const shipElement = document.querySelector('#ship');
            const sailInterval = setInterval(() => {
                const shipLeft = parseInt(shipElement.style.left, 10);
                if (shipLeft === (nextPortElement.offsetLeft - 32)) {
                    ship.setSail();
                    ship.dock();
                    clearInterval(sailInterval);
                }
                shipElement.style.left = `${shipLeft + 1}px`;
            }, 20);

            setTimeout(() => {
                this.renderMessage(`Now arriving at ${nextPortName}`);
            }, 2500);

            this.HUDReset();
            this.renderHUD();
        };

        renderMessage(message) {
            const newMessage = document.createElement('div');
            newMessage.id = 'message';
            newMessage.innerHTML = message;

            viewport.appendChild(newMessage);

            setTimeout(() => {
                viewport.removeChild(newMessage);
            }, 2500);

        }
        
    };

    

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else { 
        window.Controller = Controller;
    }

}());