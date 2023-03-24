function targetColor(i) 
{
  if(i<=27){                    // Fruits
    return color(250,29,47);  
  } else if (i>=28 && i<=36){   // Juices
    return color(248,117,49);  
  } else if (i>=37 && i<=57){   // Dairies
    return color(238,233,233);  
  } else {                      // Vegetables
    return color(156,203,25);  
  }
}

function textColor(i)
{
  if(i<=27){                    // Fruits
    return color(255,255,255);  
  } else if (i>=28 && i<=36){   // Juices
    return color(255,255,255);  
  } else if (i>=37 && i<=57){   // Dairies
    return color(0,0,0);  
  } else {                      // Vegetables
    return color(255,255,255);  
  }
}

// Target class (position and width)
class Target
{
  constructor(x, y, w, l, id, type)
  {
    this.x        = x;
    this.y        = y;
    this.width    = (w * 14) / 10;
    this.height   = (w * 13) / 20;
    this.label    = l;
    this.id       = id;
    this.type     = type;
    this.color    = targetColor(id);
    this.text     = textColor(id);
  }
  
  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    let left = this.x-(this.width/2);
    let right = this.x+(this.width/2);
    let top = this.y-(this.height/2);
    let bottom = this.y+(this.height/2);
    
    return mouse_x>=left && mouse_x<=right && mouse_y<=bottom && mouse_y>=top;
  }
  
  // Draws the target (i.e., a circle)
  // and its label
  draw()
  {
    // Draw target
    fill(this.color);   
    rect(this.x - this.width/2, this.y - this.height/2,
         this.width, this.height,10);
    
    // Draw label
    textFont("Arial", 15);
    fill(this.text);
    textAlign(CENTER, BOTTOM);
    text(this.label, this.x, this.y + (this.height/2)-7);
      
    // Draw first letter on top
    textFont("Arial", 20);
    textAlign(CENTER, TOP);
    text(this.label[0], this.x, this.y - (this.height/2)+7);
    fill(this.text);
    textStyle(NORMAL);
    textAlign(CENTER);
  }
}