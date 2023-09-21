export class Player {
  id: number;
  image: string;
  album: string;
  duration: number;
  song: string;
  artist: string;


  constructor(id: number, image: string, album: string, duration: number, song:string, artist: string) {
    this.id = id;
    this.image = image;
    this.album = album;
    this.duration = duration;
    this.song = song;
    this.artist = artist;
    
}
}

export const demoCanzoni:Player[] = [
    new Player(1, "https://www.ibs.it/images/0603497838820_0_536_0_75.jpg", "Madame X", 3000, "Medellin", "Madonna"),
    new Player(2, "https://www.ibs.it/images/0603497838820_0_536_0_75.jpg", "Madame X", 7600, "American Life", "Madonna"),
    new Player(3, "https://www.ibs.it/images/0603497838820_0_536_0_75.jpg", "Madame X", 3400, "Like a prayer", "Madonna"),
    new Player(4, "https://www.ibs.it/images/0603497838820_0_536_0_75.jpg", "Madame X", 5600, "Rebel heart", "Madonna"),
    new Player(5, "https://www.ibs.it/images/0603497838820_0_536_0_75.jpg", "Madame X", 8700, "Erotica", "Madonna"),
    new Player(6, "https://www.ibs.it/images/0603497838820_0_536_0_75.jpg", "Madame X", 2040, "True Blue", "Madonna"),]