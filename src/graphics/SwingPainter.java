package graphics;
import javax.swing.*;

public class SwingPainter {
  private int x, y;
  private String header;

  public SwingPainter() {
    this(500, 400, "Got the Swing!");
  }

  public SwingPainter(int x, int y) {
    this(x, y, "Got the Swing!");
  }

  public SwingPainter(String header) {
    this(500, 400, "Got the Swing!");
  }

  public SwingPainter(int x, int y, String header) {
    this.x = x;
    this.y = y;
    this.header = header;
  }

  public int getX() {
    return x;
  }
}
