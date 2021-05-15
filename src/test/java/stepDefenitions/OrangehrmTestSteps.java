package stepDefenitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrangehrmTestSteps 
{
	public static WebDriver driver;

	@Given("^I Open Orangehrm with url \"([^\"]*)\"$")
	public void i_Open_Orangehrm_with(String url) throws Throwable {
		System.setProperty("webdriver.gecko.driver","d:\\geckodriver.exe");		
		driver=new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get(url);
		system.out.println("opened success");
		
	}

	@Then("^I should see Login Page$")
	public void i_should_see_Login_Page() throws Throwable {
	   if (driver.findElement(By.id("btnLogin")).isDisplayed()) 
	   {
		System.out.println("Application Launched Successfully");
	} else 
	{
		System.out.println("Application Launch Failed");
	}
	}
	
	@When("^I enter username as \"([^\"]*)\"$")
	public void i_enter_username_as(String uname) throws Throwable {
	    driver.findElement(By.id("txtUsername")).sendKeys(uname);
	}

	@And("^I enter password as \"([^\"]*)\"$")
	public void i_enter_password_as(String pword) throws Throwable {
	   driver.findElement(By.id("txtPassword")).sendKeys(pword);
		
	}

	@And("^I click Login$")
	public void i_click_Login() throws Throwable {
	   driver.findElement(By.id("btnLogin")).click();
	}

	@Then("^I should see Admin Module$")
	public void i_should_see_Admin_Module() throws Throwable {
	    if (driver.findElement(By.linkText("Admin")).isDisplayed()) 
	    {
	    	System.out.println("Admin Login Successful");
		} else 
		{
			System.out.println("Admin Login Failed");
		}
	}

	@And("^I close Browser$")
	public void closeBrowser()
	{
		driver.close();
	}
	
	
	@Then("^I should see Error Message$")
	public void i_should_see_Error_Message() throws Throwable {
	    String errmsg=driver.findElement(By.id("spanMessage")).getText();
	    if (errmsg.equalsIgnoreCase("Invalid credentials")) 
	    {
	    	System.out.println("Admin Login unsuccessful for invalid data");
		} 
	}
	
	
	
	
}
