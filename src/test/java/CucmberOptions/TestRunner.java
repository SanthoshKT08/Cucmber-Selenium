package CucmberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
@CucumberOptions
(features = "src/test/java/features" , glue = "StepDefinitions",  plugin = {"json:target/cucumber.json"})
public class TestRunner extends AbstractTestNGCucumberTests{
	//extends AbstractTestNGCucumberTests and Un-command the @Runwith(cucuber.class)
}