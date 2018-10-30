import com.mercadolibre.training.choweb.controller.Controller;
import com.mercadolibre.training.choweb.controller.dto.CreatePreference;
import com.mercadolibre.training.choweb.controller.dto.Installments;
import com.mercadolibre.training.choweb.service.Service;
import com.mercadopago.exceptions.MPException;
import org.junit.BeforeClass;
import org.junit.Test;

import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;

public class ControllerTest {

    @BeforeClass
    public static void setUp() throws IOException, MPException {
        Controller.INSTANCE.run();
    }

    @Test
    public void installmentsShouldRetrieveAValidIssuerName() throws IOException, MPException {
        Installments i = Service.INSTANCE.getInstallments("365332134-ee59e0c2-c406-4561-86b7-b6ff268b8493", "430495");
        System.out.println(i.getIssuerName());
        System.out.println(i.getRecommendedMessages());
        assertThat(i.getIssuerName()).isEqualToIgnoringCase("Banco Hipotecario");
    }

    @Test
    public void creatingPreferenceShouldRetrieveAnInitPoint() throws IOException, MPException {
        CreatePreference preference = Service.INSTANCE.createPreference(
                "{\n" +
                        "   \"items\":[\n" +
                        "      {\n" +
                        "         \"title\":\"Pikachu de la suerte\",\n" +
                        "         \"amount\":44,\n" +
                        "         \"price\":999,\n" +
                        "         \"pictureUrl\":\"https://res.cloudinary.com/teepublic/image/private/s---Orh_gAT--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1489813788/production/designs/1332589_1.jpg\"\n" +
                        "      }\n" +
                        "   ],\n" +
                        "   \"payerEmail\":\"titisimo@mercadolibre.com\",\n" +
                        "   \"clientId\":\"458135539432788\",\n" +
                        "   \"clientSecret\":\"godDx4YpwY5pJ4bfZrej0cCKarovvBj0\"\n" +
                        "}"
        );
        assertThat(preference.getInitPoint()).isNotEmpty();
    }

    @Test
    public void idTypesShouldContainDNI() throws IOException {
        String idTypes = Service.INSTANCE.getIdTypes();
        assertThat(idTypes).containsIgnoringCase("dni");
    }

    @Test
    public void getAmountFromPreferenceId() throws MPException {
        String amount = Service.INSTANCE.getAmountFromPreferenceId("243966003-37ab7ff3-daa0-47e6-9558-fee42507b856");
        System.out.println(amount);
        assertThat(amount).isNotEmpty();
    }
}



