package io.hoth.birdie;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DbSeeder implements CommandLineRunner{
    private TestRepository testRepository;

    public DbSeeder(TestRepository testRepository) {
        this.testRepository = testRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Test robert = new Test(
                "Robert",
                "ChungTEst1"
        );

        Test rafael = new Test(
                "Rafffff",
                "Vallldeezzz"
        );

        this.testRepository.deleteAll();
        List<Test> tests = Arrays.asList(robert, rafael);
        this.testRepository.saveAll(tests);
    }



}
