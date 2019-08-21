package com.Btrix24.step_definitions;

import com.Btrix24.utulities.ConfigurationReader;
import com.Btrix24.utulities.Driver;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

public class Hook {

    //default that runs for any scenario
    @Before
    public void setup(Scenario scenario){
        System.out.println(scenario.getSourceTagNames());
        System.out.println(scenario.getName());
        System.out.println("BEFORE");
        Driver.getDriver().manage().window().maximize();
        Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        //Driver.getDriver().get(ConfigurationReader.getProperty("url" + ConfigurationReader.getProperty("environment")));
    }
    @After
    public void teardown(Scenario scenario){
        if(scenario.isFailed()){
            TakesScreenshot takesScreenshot= (TakesScreenshot)Driver.getDriver();
            byte[] image= takesScreenshot.getScreenshotAs(OutputType.BYTES);
            //will attach
            scenario.embed(image,"image/png");
        }
        Driver.closeDriver();
        System.out.println("AFTER");
    }
}
