package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.SwitchED.Generics.Baseclass;
import com.SwitchED.Generics.FileUtilities;
import com.SwitchED.PageObjects.HomePage;
import com.SwitchED.PageObjects.SignIn;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;


@RunWith(Cucumber.class)
public class Login extends Baseclass {

	public static SignIn si;
	
	public static HomePage hp;
	
	@Given("^intialize the \"([^\"]*)\"$")
    public void intialize_the_something(String browsers) throws Throwable {
		
		if(browsers.equalsIgnoreCase("chrome"))
		{
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
			driver.manage().window().maximize();
		}
		else if (browsers.equalsIgnoreCase("firefox")) 
		{
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
			driver.manage().window().maximize();
		}
    }

    @Given("^Enter the URL$")
    public void enter_the_url() throws Throwable {
    	driver.get(pronote.getUrl());
    	driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//*[@id=\"details-button\"]")).click();
		driver.findElement(By.xpath("//*[@id=\"proceed-link\"]")).click();
    }

    @Given("^On Home page click on Sign In$")
    public void on_home_page_click_on_sign_in()   {
    	hp = new HomePage(driver);
    	hp.clickOnSignInBtn();
    }
    
    @When("^User login with email id (.+) and valid password (.+)$")
    public void user_login_with_email_id_and_valid_password(String emailid, String password) throws Throwable {
    	si = new SignIn(driver);
		si.enterEmailAdress(emailid);
		si.enterPassword(password);
    }

    @Then("^User clicks on sign in button$")
    public void user_clicks_on_sign_in_button()   {
    	si.clickOnLoginBtn();
    }

    @And("^On success User login to the application$")
    public void on_success_user_login_to_the_application() {
       System.out.println("On success User login to the application");
       WebElement textMessage = driver.findElement(By.xpath("//li[@id='childTab']"));
		String ActualText=textMessage.getText();
		System.out.println(ActualText);
		hp.verifychildname(driver);
    }
    

    @And("^browser close$")
    public void browser_close()   {
       driver.close();
    }
    
}