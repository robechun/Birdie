package io.hoth.birdie.Services;

import io.hoth.birdie.Entities.CoinEntry;

import java.util.List;

public interface CoinRepositoryCustom {
    boolean updateCoinEntries(String name, List<CoinEntry> entries);
}
