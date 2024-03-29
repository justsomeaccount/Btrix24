package com.Btrix24.runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

//runwith is a tag from JUnit that runs our file
@RunWith(Cucumber.class)
//used to configure that how we tun cucumber test
@CucumberOptions(
        plugin ={
                "json:target/cucumber.json",
                "html:target/default-cucumber-reports"
        },
       tags ="@smoke" ,
        features = {"src/test/resources/features"  }, //to specify where are the features

        //feature contains scenarios
        //every scenario is like a test
        //where is the implementation for features
        glue = {"com/Btrix24/step_definitions"},
        //dry tun - to generate step definitions automatically
        //you will see them in the console output
        dryRun =false

)

public class CukesRunner_With_Tags {
}
