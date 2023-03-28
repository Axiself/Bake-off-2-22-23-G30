class Group
{
  constructor(l, c, y)
  {
    this.label  = l;
    this.color  = c;
    this.y      = y;
  }

  draw(screen_width){
    fill(this.color);
    textFont("Arial", 25);
    textAlign(CENTER, BOTTOM);
    text(this.label, screen_width/2 , this.y);
  }
}
