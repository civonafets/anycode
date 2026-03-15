# Analyt Integration Project

## Goal
Define and track two separate suite adapters:
- Analyt -> anymem
- Analyt -> anycode

## Rules
1. Analyt is an adapter host, not canonical runtime for either product.
2. Token exchange is adapter concern; canonical identity and authorization remain product-owned.
3. Adapter contracts must keep `anymem` and `anycode` independently operable outside Analyt.
