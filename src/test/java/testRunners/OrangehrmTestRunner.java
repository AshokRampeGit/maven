package testRunners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@RunWith(Cucumber.class)
@CucumberOptions(features="Features",glue="stepDefenitions",dryRun=false,
plugin={"com.cucumber.listener.ExtentCucumberFormatter:Reports/report.html", 
		                                             "html:target/cucumber-reports"})

public class OrangehrmTestRunner extends AbstractTestNGCucumberTests 
{

}
