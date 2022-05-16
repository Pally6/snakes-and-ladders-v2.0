export class Player {
    
    public name: string;
    public playerPosition: number;
    public playerOrder: number
    
  
    constructor(name: string, playerPosition: number, playerOrder: number) {
      this.name = name;
      this.playerPosition = playerPosition;
      this.playerOrder = playerOrder
    }
  }