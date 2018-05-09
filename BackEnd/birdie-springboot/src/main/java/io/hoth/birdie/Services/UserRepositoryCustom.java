package io.hoth.birdie.Services;

public interface UserRepositoryCustom {
    boolean upsertApiKey(String username, String apiKey);
    boolean upsertSecret(String username, String apiKey);
    boolean setPassword(String username, String password);
}
