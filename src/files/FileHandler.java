package files;
import java.io.*;

public class FileHandler {
  private String path;

  public FileHandler(String file_path) {
    path = file_path;
  }

  public String ReadFile() throws IOException {
    String file = null;
    String line = null;

    BufferedReader br =
      new BufferedReader(new FileReader(path));

    while((line = br.readLine()) != null) {
      file += line;
    }

    br.close();

    return file;
  }

  public void WriteFile(String data) throws IOException {
    BufferedWriter bw =
      new BufferedWriter(new FileWriter(path));

    bw.write(data);

    bw.close();
  }
}
