// Target class (position and width)
class Target
{
  constructor(x, y, w, l, id, type)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.label  = l;
    this.id     = id;
    this.type   = type;
  }
  
  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
  }
  
  // Draws the target (i.e., a circle)
  // and its label
  draw()
  {
    // Draw target
    if(this.id<=27){                          // Fruits
      fill(color(250,29,47));  
    } else if (this.id>=28 && this.id<=36){   // Juices
      fill(color(248,117,49));  
    } else if (this.id>=37 && this.id<=57){   // Dairies
      fill(color(238,233,233));  
    } else {                                  // Vegetables
      fill(color(156,203,25));  
    }
                     
    circle(this.x, this.y, this.width);
    
    // Draw label
    if(this.id>=37 && this.id<=57) {
      textFont("Arial", 12);
      fill(color(0,0,0));
      textAlign(CENTER, CENTER);
      text(this.label, this.x, this.y);
       }
    else {
      textFont("Arial", 12);
      fill(color(255,255,255));
      textAlign(CENTER, CENTER);
      text(this.label, this.x, this.y);
    }
    
  }

  drawG() 
  {
    // Draw target
    fill(color(191, 191, 191));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 12);
    fill(color(255,255,255));
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y);
  }
}