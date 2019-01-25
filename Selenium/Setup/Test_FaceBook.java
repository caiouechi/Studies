import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Test_FaceBook {

public static void main(String[] args) throws InterruptedException{

// TODO Auto-generated method stub



// Windows

//System.setProperty("webdriver.chrome.driver","C:\\chromedriver.exe");

// 1. Configure Selenium to talk to Chrome

System.setProperty("webdriver.chrome.driver","chromedriver.exe");

WebDriver driver = new ChromeDriver();

// 2. Enter the website you want to go to

String baseUrl = "https://www.facebook.com/login/";

// 3. Open Chrome and go to the base url;

driver.get(baseUrl);

// 4. Enter a username

// ---------------------

// 4a. Find the box

WebElement usernameBox = driver.findElement(By.id("email"));

// 4b. Put the user name in there

usernameBox.sendKeys("jenelle@gmail.com");

// 5. Enter a password

// ---------------------

// 5a. Find the password box

WebElement passwordBox = driver.findElement(By.id("pass"));

// 5b. Put the password in there

passwordBox.sendKeys("fakepassword123!!!!@");

Thread.sleep(1000);

// 6. Press the login button

// ---------------------

// 6a. Find the login button

WebElement loginButton = driver.findElement(By.id("loginbutton"));

// 6b. Click the button

loginButton.click();

WebDriverWait wait = new WebDriverWait(driver, 10);

//WebElement passwordBox = driver.findElement(By.id("pass"));

//

try {
	var lstFound = wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("_4rbf")));
	
	if (lstFound != null) {
		System.out.println("Error appeared!");	
	}else {
		System.out.println("Error not appeared");
	}

}catch(Exception e) {
	System.out.println("Error not appeared");
}




// 7. Close the browser
Thread.sleep(10000);  //pause for 1 second before closing the browser

driver.close();

}

}

