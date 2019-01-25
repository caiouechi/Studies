import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Selenium_gettingValueAfterRequest {

public static void main(String[] args) throws InterruptedException{

// TODO Auto-generated method stub



// Windows

//System.setProperty("webdriver.chrome.driver","C:\\chromedriver.exe");

// 1. Configure Selenium to talk to Chrome

System.setProperty("webdriver.chrome.driver","chromedriver.exe");

WebDriver driver = new ChromeDriver();

// 2. Enter the website you want to go to

String baseUrl = "https://www.seleniumeasy.com/test/basic-first-form-demo.html";

// 3. Open Chrome and go to the base url;

driver.get(baseUrl);

// 4. Enter a username

// ---------------------

// 4a. Find the box

WebElement sum1 = driver.findElement(By.id("sum1"));
sum1.sendKeys("99");

WebElement sum2 = driver.findElement(By.id("sum2"));
sum2.sendKeys("100");

// 4b. Put the user name in there

Thread.sleep(1000);

// 6. Press the login button

// ---------------------

// 6a. Find the login button

WebElement loginButton = driver.findElement(By.id("gettotal")).findElement(By.className("btn-default"));
//WebElement loginButton = form.findElement(By.className("btn-default"));

// 6b. Click the button
loginButton.click();

WebDriverWait wait = new WebDriverWait(driver, 10);
//WebElement passwordBox = driver.findElement(By.id("pass"));
//

try {
	var lstFound = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("displayvalue")));
	
	if (lstFound != null) {
		System.out.println(lstFound.getText());	
	}else {
		System.out.println("BUGGED");
	}

}catch(Exception e) {
	System.out.println("BUGGED");
}

// 7. Close the browser
Thread.sleep(10000);  //pause for 1 second before closing the browser

driver.close();
}

}

